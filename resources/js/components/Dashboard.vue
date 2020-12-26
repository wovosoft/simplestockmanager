<template>
    <div>
        <b-row>
            <b-col>
                <b-card header-class="p-1">
                    <template v-slot:header>
                        <b-row>
                            <b-col>
                                <b-input-group prepend="Select Month">
                                    <b-form-input @change="getCheckInOuts" v-model="query.month" type="month"/>
                                    <template v-slot:append>
                                        <b-button @click="getCheckInOuts">Refresh</b-button>
                                    </template>
                                </b-input-group>
                            </b-col>
                            <b-col>
                                <b-input-group prepend="Chart Type">
                                    <b-form-select v-model="chartOptions.chart.type" :options="chart_types"/>
                                </b-input-group>
                            </b-col>
                        </b-row>
                    </template>
                    <Highcharts v-if="enable_chart" :options="chartOptions"/>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import Highcharts from 'highcharts';
    import loadMap from 'highcharts/modules/map.js';
    import {genComponent} from 'vue-highcharts';
    import dayjs from 'dayjs'

    loadMap(Highcharts);

    export default {
        name: "Dashboard",
        components: {
            Highcharts: genComponent('Highcharts', Highcharts),
        },
        data() {
            return {
                query: {
                    month: dayjs().format('YYYY-MM')
                },
                chart_types: [
                    {text: 'Line', value: 'line'},
                    {text: 'Spline', value: 'spline'},
                    {text: 'Area', value: 'area'},
                    {text: 'Area Spline', value: 'areaspline'},
                    {text: 'Column', value: 'column'},
                    {text: 'Bar', value: 'bar'},
                    {text: 'Pie', value: 'pie'},
                    {text: 'Scatter', value: 'scatter'},
                    // 'gauge',
                    // 'arearange',
                    // 'areasplinerange',
                    // 'columnrange'
                ],
                enable_chart: false,
                chartOptions: {
                    chart: {
                        type: 'area'
                    },
                    title: {
                        text: 'Check-in and Check-outs'
                    },
                    subtitle: {
                        text: 'Overview'
                    },
                    xAxis: {
                        title: {
                            text: 'Dates',
                        },
                        categories: []
                    },
                    yAxis: {
                        title: {
                            text: 'Transactions'
                        }
                    },
                    plotOptions: {
                        line: {
                            dataLabels: {
                                enabled: true
                            },
                            enableMouseTracking: false
                        }
                    },
                    series: [
                        {
                            name: 'Check Ins',
                            data: []
                        },
                        {
                            name: 'Check Outs',
                            data: []
                        }
                    ]
                }
            }
        },
        mounted() {
            this.getCheckInOuts();
        },
        methods: {
            getCheckInOuts() {
                this.enable_chart = false;
                this.chartOptions.subtitle.text = "Overview: " + this.query.month;
                this.chartOptions.xAxis.categories = [];
                let endOfMonth = dayjs(this.query.month).daysInMonth();
                this.chartOptions.series = [
                    {
                        name: 'Check Ins',
                        data: []
                    },
                    {
                        name: 'Check Outs',
                        data: []
                    }
                ];
                for (let x = 1; x <= endOfMonth; x++) {
                    this.chartOptions.xAxis.categories.push(x);
                    this.chartOptions.series[0].data.push(0);
                    this.chartOptions.series[1].data.push(0);
                }
                if (this.query.month) {
                    axios.post(route('Backend.Widgets.CheckInOuts').url(), {
                        month: this.query.month
                    }).then(res => {
                        let index = 0;
                        for (let x in res.data.check_in) {
                            index = Number(x.toString().split('-')[2]);
                            this.chartOptions.series[0].data[index - 1] = res.data.check_in[x];
                        }
                        for (let x in res.data.check_out) {
                            index = Number(x.toString().split('-')[2]);
                            this.chartOptions.series[1].data[index - 1] = res.data.check_out[x];
                        }
                    }).catch(err => {
                        console.log(err.response.data);
                    }).finally(() => {
                        this.enable_chart = true;
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>
