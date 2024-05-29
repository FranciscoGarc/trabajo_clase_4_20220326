import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const FormularioPokemon = ({tituloFormulario, labelInput, placeHolderInput, valor, setValor, searchTerm, setSearchTerm}) => {
    return (
        <View>
            <Text style={styles.header}>{tituloFormulario}</Text>
            <View>
                <Text style={styles.descripcion}>{labelInput}</Text>
                <TextInput
                    style={styles.Input}
                    placeholder={placeHolderInput}
                    keyboardType="numeric"
                    onChangeText={text => setValor(parseInt(text) || 0)}
                    value={String(valor)}
                />
                <Text style={styles.descripcion}>Buscar por nombre:</Text>
                <TextInput
                    style={styles.Input}
                    placeholder="Nombre del Pokémon"
                    onChangeText={text => setSearchTerm(text.toLowerCase())}
                    value={searchTerm}
                />
            </View>
        </View>
    );
};

export default FormularioPokemon;

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    },
    Input: {
        width: '70%',
        backgroundColor: '#dfd7d7',
        height: 50,
        fontWeight: '900',
        borderRadius: 5,
        margin: 5,
        fontSize: 18
    },
    descripcion: {
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'justify',
        marginTop: 10,
    },
});