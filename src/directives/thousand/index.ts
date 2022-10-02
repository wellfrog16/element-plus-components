import { loader } from '@wfrog/utils'
import type { Directive } from 'vue'

const thousand: Directive = {
    mounted: async (el, binding) => {
        const elInput = el.getElementsByTagName('input')[binding.value?.elInputIndex || 0]
        const disabled = elInput.disabled
        elInput.disabled = true
        const Cleave = await loader.loadCdnSingle('cleave')
        const option = { decimalScale: 2, integerScale: 0, prefix: '', ...binding.value }
        elInput.cleave = new Cleave(elInput, {
            numeral: true,
            numeralThousandsGroupStyle: 'thousand',
            numeralDecimalScale: option.decimalScale,
            numeralIntegerScale: option.integerScale,
            prefix: option.prefix,
        })
        elInput.style.textAlign = 'right'
        elInput.style.fontFamily = 'Pathway Gothic One'
        elInput.disabled = disabled
    },
    updated: (el, binding) => {
        setTimeout(() => {
            const event = new Event('input', { bubbles: true })
            const elInput = el.getElementsByTagName('input')[binding.value?.elInputIndex || 0]
            elInput.dispatchEvent(event)
            elInput.value = elInput.cleave?.properties?.result || ''
        }, 0)
    },
}

export default thousand
