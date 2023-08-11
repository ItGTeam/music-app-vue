import SongItem from '@/components/SongItem.vue'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'

describe("SongItem", () => {
    test('render song.display_name', () => {
        const song = {
            display_name: 'test'
        }

        const wrapper = shallowMount(SongItem, {
            propsData: {
                song
            },
            global: {
                components: {
                    'router-link': RouterLinkStub
                }
            }
        })

        const compositionAuther = wrapper.find('.text-gray-500')

        expect(compositionAuther.text()).toBe(song.display_name)
        // expect(compositionAuther.text()===song.d).toBe(false)

    })
})