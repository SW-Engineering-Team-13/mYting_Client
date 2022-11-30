<template>
    <v-card>
        <v-card-title class="text-h5">
        Login
        </v-card-title>
        <v-card-text>
            <v-row
                dense
                justify="center"
                >
                <v-col
                cols="12">
                <v-text-field placeholder="ID" />
                </v-col>
                <v-col
                cols="12">
                <v-text-field placeholder="Password" />
                </v-col>
                <v-col>
                    <v-btn>
                        Login
                    </v-btn>
                    <v-btn
                        style="margin-left:10px;"
                        color="blue"
                    >
                        Register
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
}
</script>