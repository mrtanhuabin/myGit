import * as echarts from 'echarts';
export const echartsbData ={
    title: {
        text: '基础雷达图'
    },
    tooltip: {},
    legend: {
        data: []
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [5, 7]
            }
        },
        indicator: [
            { name: '外部环境', max: 6500},
            { name: '公司治理', max: 16000},
            { name: '资产规模与发展', max: 30000},
            { name: '资产质量', max: 38000},
            { name: '盈利情况', max: 52000},
            { name: '业务结构', max: 25000}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [1300, 10000, 28000, 35000, 50000, 19000],
                name: '预算分配（Allocated Budget）',
                areaStyle: {
                    opacity: 0.5,
                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                        {
                            color: '#B8D3E4',
                            offset: 0
                        },
                        {
                            color: '#72ACD1',
                            offset: 1
                        }
                    ])
                }
            }
        ]
    }]
}
export default echartsbData;