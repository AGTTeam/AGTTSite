<script setup>
const { locale } = useI18n({
  useScope: 'local'
})
</script>

<template>
    <tr>
        <td class="patcher-option-radio">
            <div>
                <label>
                    <input type="radio" :name="optionName" :value="option1value" :data-val="option1data" checked="" />
                    {{ option1 }}
                </label>
            </div>
        </td>
        <td class="patcher-option-radio">
            <div>
                <label>
                    <input type="radio" :name="optionName" :value="option2value" :data-val="option2data" />
                    {{ option2 }}
                </label>
            </div>
        </td>
    </tr>
    <!--tr>
        <td style="text-align: center">
            <small>{{ $t('rom-patcher-option-recommended') }}</small>
        </td>
    </tr-->
</template>

<style scoped>
.patcher-option-radio {
    text-align: center;
    max-width: 50%;
    width: 50%;
}

input[type="radio"] {
    appearance: none;
    font: inherit;
    width: 1em;
    height: 1em;
    border: 0.1em solid currentColor;
    border-radius: 50%;
    display: inline-block;
}

input[type="radio"]:checked {
    background-color: var(--main-green);
}
</style>

<script>
export default {
    name: 'RomPatcherOption',
    props: {
        optionName: {
            type: String,
            required: true,
        },
        option1: {
            type: String,
            required: true,
        },
        option1value: {
            type: String,
            required: true,
        },
        option1data: {
            type: String,
            required: true,
        },
        option2: {
            type: String,
            required: true,
        },
        option2value: {
            type: String,
            required: true,
        },
        option2data: {
            type: String,
            required: true,
        },
    }
}
</script>