import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { PieChart } from 'react-native-chart-kit'
import { color } from '../styles/style'


const screenWidth = Dimensions.get("screen").width - 60
const Chart = ({
    outOfStock,
    inStock
}) => {
    const data = [{
        name: "Out Of Stock",
        population: outOfStock,
        color: color.color2,
        legendFontColor: color.color1_light
    },
    {
        name: "In Stock",
        population: inStock,
        color: color.color1,
        legendFontColor: color.color1_light2
    }


    ]
    const chartConfig = {

        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,

    }

    return (
        <View>
            <PieChart
                data={data}
                width={screenWidth}
                height={150}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"0"}

                absolute
            />

        </View>
    )
}

export default Chart