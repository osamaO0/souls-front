<template>
    <v-dialog v-model="dialog" width="auto">
        <template v-slot:activator="{ props }">
            <p style="cursor: pointer" v-bind="props">Area* <v-icon icon="mdi-chevron-right" class="float-right"></v-icon>
            </p>
        </template>

        <v-card class="card" width="450">
            <v-list :items="items" bg-color="#013d40" active-color="#64938c" class="text-white" />
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'AreaDialog',

    data() {
        return {
            dialog: false,
            items: [
                {
                    title: 'Item #1',
                    value: 1,
                },
                {
                    title: 'Item #2',
                    value: 2,
                },
                {
                    title: 'Item #3',
                    value: 3,
                },
                {
                    title: 'Item #4',
                    value: 4,
                },
                {
                    title: 'Item #5',
                    value: 5,
                },
                {
                    title: 'Item #6',
                    value: 6,
                },
                {
                    title: 'Item #7',
                    value: 7,
                },
                {
                    title: 'Item #8',
                    value: 8,
                },
                {
                    title: 'Item #9',
                    value: 9,
                },
            ],
        }
    },
}
</script>

<style scoped>
.card {
    background-color: #013d40;
}
</style>