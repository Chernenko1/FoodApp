import { Pressable, StyleSheet, Text, View } from "react-native"
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from "../../themes/COLORS"
import { useEffect, useState } from "react";
import { AppText } from "../components/AppText";

interface Props {
    handleDate: (date: string) => void
}

export const DatePicker = ({handleDate}: Props) => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate as Date);
    };

    const showMode = () => {
        setShow(true);
      };

    const formatDate = (date: Date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        
        return `${day}-${month}-${year}`
    }     

    useEffect(() => {handleDate(formatDate(date))}, [date])

    return (
        <View style={styles.mainView}>
            <Pressable style={styles.contentView} onPress={showMode}>
                <AppText style={styles.text}>{formatDate(date)}</AppText>
                <Icon name="calendar-outline" color={COLORS.black} size={20}/>
            </Pressable>
        <View>
            {show && (
                <DateTimePicker
                value={date}
                mode={'date'}
                onChange={onChange}
                />
            )}
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        top: '6%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        backgroundColor: COLORS.lightGray
    },
    text: {
        color: COLORS.black,
        fontSize: 18,
        marginRight: 10
    }
})