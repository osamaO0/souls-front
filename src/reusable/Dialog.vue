<template>
    <div class="text-center">
        <v-btn color="primary">
            Open Dialog

            <v-dialog v-model="dialog" activator="parent" width="auto">
                <v-card width="300" height="200">
                    <v-toolbar color="#013d40">
                        <v-toolbar-title class="text-center text-white">Saved</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text style="background-color: #95c4c1" class="text-body-2 text-center">
                        Your profile was updated successfully.
                    </v-card-text>
                    <v-btn color="#95c4c1" @click="dialog = false">Ok</v-btn>
                </v-card>
            </v-dialog>
        </v-btn>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
        }
    },
}
</script>