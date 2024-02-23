import React, { ReactNode } from "react";
import { Pressable, Text, View, Modal, StyleSheet } from "react-native";
import { COLORS } from "../../themes/COLORS";
import { Button } from "./Button";

interface Props {
    children: ReactNode
    visible: boolean,
    closeModal: () => void,
    onPress: () => void
}

export const ModalV = ({children, visible,closeModal, onPress}: Props) => { 
    
    return (
        <Modal visible={visible} transparent={true} onRequestClose={closeModal}>
            <View style={styles.centeredModal}>
                <View style={styles.modalView}>
                    {children}
                    <Button title="Сохранить" onPress={onPress} color={COLORS.orange}/>
                    <Button title="Отмена" onPress={closeModal}/>
                </View>
            </View> 
        </Modal>
    )
}

const styles = StyleSheet.create(
    {
        centeredModal: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        modalView: {
            backgroundColor: COLORS.white,
            width: '80%',
            padding: 35, 
            borderRadius: 15,
            elevation: 2,
            shadowOffset: {
            width: 0,
            height: 1,
            },
           shadowOpacity: 0.15,
           shadowRadius: 2,
           rowGap: 10
        },
        modalCategories: {
            marginBottom: 10
        },
        modalHide: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.orange,
            borderRadius: 5,
        },
        modalHideText: {
            fontSize: 20,
            fontFamily: 'Rubik-Regular',
            color: COLORS.white
        },
        buttonView: {
            rowGap: 10
        }
    }
)