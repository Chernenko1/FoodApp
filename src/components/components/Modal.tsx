import React, { ReactNode } from "react";
import { Pressable, Text, View, Modal, StyleSheet } from "react-native";
import { COLORS } from "../../themes/COLORS";

interface Props {
    children: ReactNode
    visible: boolean
    onPress: () => void
}

export const ModalV = ({children, visible, onPress}: Props) => { 
    
    return (
        <Modal visible={visible} transparent={true}>
            <View style={styles.centeredModal}>
                <View style={styles.modalView}>{children}
                    <Pressable style ={styles.modalHide} onPress={onPress}>
                        <Text style={styles.modalHideText}>Закрыть</Text>
                    </Pressable>
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
        },
        modalView: {
            backgroundColor: COLORS.white,
            padding: 35, 
            borderRadius: 15,
            elevation: 2,
            shadowOffset: {
            width: 0,
            height: 1,
            },
           shadowOpacity: 0.15,
           shadowRadius: 2,
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
        }
    }
)