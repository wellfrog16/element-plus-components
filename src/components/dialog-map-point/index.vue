<template>
    <HDialog
        v-model="dialogVisible"
        title="选择地点"
        :close-on-click-modal="false"
        :width="dialogWidth"
        :show-close="false"
        append-to-body
        :show-fullscreen="false"
    >
        <div ref="elContainer" :style="containerStyle" />
        <div :class="$style.search">
            <ElInput v-model="keywords" placeholder="请输入查询地址" clearable @keyup.enter="handleSearch" @clear="handleClear">
                <template #append><ElButton :icon="Search" @click="handleSearch" /></template>
            </ElInput>
        </div>
        <template #footer>
            <ElButton @click="handleClose">取 消</ElButton>
            <ElButton type="primary" @click="handleConfirm">确 定</ElButton>
        </template>
    </HDialog>
</template>

<script lang="ts" setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { defaultWindow, loader } from '@wfrog/utils'
import { ElButton, ElInput } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
import HDialog from '../dialog/index.vue'
import type { PropType } from 'vue'

const props = defineProps({
    modelValue: { type: Object as PropType<{ lng: number; lat: number }>, default: () => ({ lng: 0, lat: 0 }) },
    visible: { type: Boolean, required: true },
    city: { type: String, default: '上海' },
    ak: { type: String, default: 'rrK5thxGKxN45pnaH2Gd0ZxyFkr8MaTl&services=&t=20220816154130' },
})

const emits = defineEmits(['update:visible', 'update:modelValue', 'close'])
const elContainer = ref()
const keywords = ref()

const dialogWidth = computed(() => {
    if (!defaultWindow) { return '500px' }

    const width = document.body.clientWidth * 0.8
    const maxWidth = 1000
    return `${width > maxWidth ? maxWidth : width}px`
})

const containerStyle = computed(() => {
    const height = document.body.clientHeight * 0.8
    const maxHeight = 600
    return { height: `${height > maxHeight ? maxHeight : height}px` }
})

const dialogVisible = computed({
    get: () => props.visible,
    set: val => {
        emits('update:visible', val)
        if (!val) { emits('close') }
    },
})

let map: any
let local: any
const point = ref({ lng: '', lat: '' })

const init = () => {
    if (!defaultWindow) { return '' }

    const { BMapGL } = defaultWindow
    map = new BMapGL.Map(elContainer.value, { enableMapClick: false })
    map.setDefaultCursor('default')
    let marker: any = null
    const { lng, lat } = props.modelValue
    if (lng) {
        const myPoint = new BMapGL.Point(lng, lat)
        marker = new BMapGL.Marker(myPoint)
        map.addOverlay(marker) // 定点坐标红点覆盖
        map.centerAndZoom(myPoint, 14) // 定位中心和缩放
    }
    else {
        map.centerAndZoom(props.city, 14) // 定位中心和缩放
    }
    // map.setCurrentCity(this.city);
    map.enableScrollWheelZoom() // 允许鼠标缩放
    map.addControl(new BMapGL.NavigationControl()) // 缩放平移控件
    // map.addControl(new BMapGL.OverviewMapControl()); // 缩略图
    setTimeout(() => {
        map.addControl(new BMapGL.ScaleControl()) // 比例尺，延迟加载，否则会有黑色闪烁
    }, 1000)
    // map.addControl(new BMapGL.MapTypeControl());

    // 地图搜索
    local = new BMapGL.LocalSearch(map, {
        renderOptions: { map },
    })
    // local.search('上海火车站');

    map.addEventListener('click', (e: any) => {
        // 通过点击百度地图，可以获取到对应的point,由point的lng、lat属性就可以获取对应的经度纬度
        point.value = e.latlng
        marker && map.removeOverlay(marker)
        marker = new BMapGL.Marker(point.value)
        map.addOverlay(marker) // 定点坐标红点覆盖
    })
}

const handleClose = () => { dialogVisible.value = false }
const handleSearch = () => { local.search(keywords.value) }
const handleClear = () => { local.clearResults() }
const destroy = () => { map = null }

watch(dialogVisible, val => {
    val && nextTick(() => init())
    !val && destroy()
})

const handleConfirm = () => {
    emits('update:modelValue', point.value)
    handleClose()
}

onMounted(() => {
    loader.loadScriptSingle(`//api.map.baidu.com/getscript?type=webgl&v=1.0&ak=${props.ak}`)
})
</script>

<style lang="scss" module>
.search {
    position: absolute;
    top: 10px;
    left: 50%;
    z-index: 5;
    width: 300px;
    padding: 4px;
    text-align: center;
    transform: translateX(-50%);
}
</style>
