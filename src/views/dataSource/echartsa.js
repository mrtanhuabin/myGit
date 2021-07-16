export const echartsaData ={
        title: {
            text: '折线图堆叠'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['外部评级', '内部评级', '中信评级']
        },
        grid: {
            left: '13%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        },
        yAxis: {
            type: 'value',
            max: 1000,
            min: 0,
            splitNumber: 5,
            interval: (1000 - 0) / 5
        },
        series: [
            {
                name: '外部评级',
                type: 'line',
                // stack: '总量', // 加上之后会出现数值一样，但是不重合的现象
                data: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110]
            },
            {
                name: '内部评级',
                type: 'line',
                // stack: '总量', // 加上之后会出现数值一样，但是不重合的现象
                data: [100, 150, 250, 350, 450, 550, 650, 750, 850, 550, 305, 415]
            },
            {
                name: '中信评级',
                type: 'line',
                // stack: '总量', // 加上之后会出现数值一样，但是不重合的现象
                data: [200, 100, 300, 400, 500, 600, 700, 680, 490, 300, 230, 180]
            },
        ],
        animation:true
}
export default echartsaData;