import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from '../styles/style'
import { Button } from 'react-native-paper';

const OrderItem = ({
    id,
    price,
    address,
    orderedOn,
    status,
    paymentMethod,
    updateHandler,
    admin = false,
    loading,
    i,
}) => {
    return (
        <View style={{ ...styles.container, backgroundColor: i % 2 == 0 ? color.color2 : color.color3, }}>
            <Text style={{ ...styles.text, backgroundColor: i % 2 == 0 ? color.color3 : color.color1 }}>
                ID - {id}
            </Text>
            <TextBox title={"Address"} value={address} i={i} />
            <TextBox title={"Order On"} value={orderedOn.split("T")[0]} i={i} />
            <TextBox title={"Price"} value={price} i={i} />
            <TextBox title={"Status"} value={status} i={i} />
            <TextBox title={"Payment Method"} value={paymentMethod} i={i} />

            {
                admin && (
                    <Button mode={"elevated"} icon={"update"} textColor={i % 2 == 0 ? color.color2 : color.color3} style={{
                        width: 120,
                        alignSelf: "center",
                        marginTop: 10,
                        backgroundColor: i % 2 == 0 ? color.color3 : color.color2,
                    }}
                        onPress={() => updateHandler(id)}
                        loading={loading}
                        disabled={loading}>Update</Button>
                )
            }
        </View>
    )
};

const TextBox = ({ title, value, i }) => (
    <Text
        style={{
            marginVertical: 6,
            color: i % 2 == 0 ? color.color3 : color.color2
        }}>
        <Text
            style={{ fontWeight: "900" }}>
            {title} {":- "}
        </Text>
        {title === "Price" ? "$" : ""}
        {value}

    </Text>
)

export default OrderItem





const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
        elevation: 5
    },
    text: {
        color: color.color2,
        fontSize: 16,
        marginHorizontal: -20, fontWeight: "900",
        marginTop: -20,
        paddingVertical: 10,
        marginBottom: 10,
        paddingHorizontal: 20,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10


    }
})