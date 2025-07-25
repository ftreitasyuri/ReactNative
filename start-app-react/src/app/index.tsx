
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, Alert, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars'; // Para o calendário
import { Picker } from '@react-native-picker/picker'; // Para o seletor de tipo de evento
import Feather from 'react-native-vector-icons/Feather'; // Para os ícones
import tw from 'twrnc'; // Para usar Tailwind CSS em React Native

// Componente principal do aplicativo
function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Estado para controlar a página atual

  // Função para mudar a página
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <View style={tw`flex-1 bg-gray-100 items-center justify-center`}>
      {/* Cabeçalho do Aplicativo */}
      <View style={tw`w-full max-w-md bg-white shadow-md rounded-t-xl p-4 items-center justify-center mb-2`}>
        <Text style={tw`text-2xl font-bold text-gray-800`}>Chácara Esperança</Text>
      </View>

      {/* Conteúdo Principal (simula as telas do app) */}
      <ScrollView style={tw`w-full max-w-md bg-white shadow-md rounded-b-xl flex-grow p-4`}>
        {currentPage === 'home' && <HomeSection />}
        {currentPage === 'gallery' && <GallerySection />}
        {currentPage === 'availability' && <AvailabilitySection />}
        {currentPage === 'contact' && <ContactSection />}
      </ScrollView>

      {/* Barra de Navegação Inferior (simula a navegação mobile) */}
      <View style={tw`w-full max-w-md bg-gray-800 shadow-lg rounded-b-xl mt-2 p-3 flex-row justify-around items-center`}>
        <NavItem icon="home" label="Início" onClick={() => navigateTo('home')} active={currentPage === 'home'} />
        <NavItem icon="image" label="Galeria" onClick={() => navigateTo('gallery')} active={currentPage === 'gallery'} />
        <NavItem icon="calendar" label="Agenda" onClick={() => navigateTo('availability')} active={currentPage === 'availability'} />
        <NavItem icon="mail" label="Contato" onClick={() => navigateTo('contact')} active={currentPage === 'contact'} />
      </View>
    </View>
  );
}

// Componente de Item de Navegação
const NavItem = ({ icon, label, onClick, active }) => (
  <TouchableOpacity
    onPress={onClick}
    style={tw`flex-col items-center p-2 rounded-lg transition-colors duration-200 ${active ? 'text-blue-400 bg-gray-700' : 'text-gray-300'}`}
  >
    <Feather name={icon} size={24} color={active ? tw.color('blue-400') : tw.color('gray-300')} />
    <Text style={tw`text-xs mt-1 ${active ? 'text-blue-400' : 'text-gray-300'}`}>{label}</Text>
  </TouchableOpacity>
);

// --- Seções do Aplicativo ---

// Seção de Início
const HomeSection = () => (
  <View style={tw`p-4 items-center`}>
    <Text style={tw`text-2xl font-semibold text-gray-700 mb-4 text-center`}>Bem-vindo à Chácara Esperança!</Text>
    <Text style={tw`text-gray-600 mb-6 text-center`}>
      O local perfeito para celebrar seus momentos especiais. Com uma infraestrutura completa e um ambiente acolhedor,
      garantimos que seu evento será inesquecível.
    </Text>
    <Image
      source={{ uri: "https://placehold.co/400x250/ADD8E6/000000?text=Chacara+Esperanca" }}
      style={tw`w-full h-52 rounded-lg shadow-md mb-6`} resizeMode="cover"
    />
    <Text style={tw`text-gray-600 text-center`}>
      Explore nossa galeria, verifique a disponibilidade de datas e entre em contato para solicitar um orçamento.
    </Text>
  </View>
);

// Seção de Galeria de Fotos
const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('festas');

  const categories = {
    festas: [
      { id: 1, src: "https://placehold.co/300x200/FFDDC1/000000?text=Festa+1", alt: "Festa animada" },
      { id: 2, src: "https://placehold.co/300x200/FFDDC1/000000?text=Festa+2", alt: "Decoração de festa" },
      { id: 3, src: "https://placehold.co/300x200/FFDDC1/000000?text=Festa+3", alt: "Pista de dança" },
    ],
    debutantes: [
      { id: 4, src: "https://placehold.co/300x200/D1FFDD/000000?text=Debutante+1", alt: "Aniversário de debutante" },
      { id: 5, src: "https://placehold.co/300x200/D1FFDD/000000?text=Debutante+2", alt: "Valda de debutante" },
      { id: 6, src: "https://placehold.co/300x200/D1FFDD/000000?text=Debutante+3", alt: "Mesa de doces debutante" },
    ],
    casamentos: [
      { id: 7, src: "https://placehold.co/300x200/D1DDFF/000000?text=Casamento+1", alt: "Cerimônia de casamento" },
      { id: 8, src: "https://placehold.co/300x200/D1DDFF/000000?text=Casamento+2", alt: "Noivos na chácara" },
      { id: 9, src: "https://placehold.co/300x200/D1DDFF/000000?text=Casamento+3", alt: "Decoração de casamento" },
    ],
    empresariais: [
      { id: 10, src: "https://placehold.co/300x200/DDD1FF/000000?text=Empresarial+1", alt: "Almoço empresarial" },
      { id: 11, src: "https://placehold.co/300x200/DDD1FF/000000?text=Empresarial+2", alt: "Reunião corporativa" },
      { id: 12, src: "https://placehold.co/300x200/DDD1FF/000000?text=Empresarial+3", alt: "Coffee break empresarial" },
    ],
  };

  return (
    <View style={tw`p-4`}>
      <Text style={tw`text-2xl font-semibold text-gray-700 mb-4 text-center`}>Nossa Galeria</Text>
      <View style={tw`flex-row justify-center flex-wrap gap-2 mb-6`}>
        {Object.keys(categories).map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => setActiveCategory(category)}
            style={tw`px-4 py-2 rounded-full ${activeCategory === category ? 'bg-blue-600 shadow-md' : 'bg-gray-200'}`}
          >
            <Text style={tw`text-sm font-medium ${activeCategory === category ? 'text-white' : 'text-gray-700'}`}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={tw`flex-row flex-wrap justify-center gap-4`}>
        {categories[activeCategory].map((photo) => (
          <View key={photo.id} style={tw`bg-gray-50 rounded-lg shadow-sm overflow-hidden w-40 h-auto`}>
            <Image source={{ uri: photo.src }} style={tw`w-full h-24 object-cover`} resizeMode="cover" />
            <Text style={tw`p-2 text-xs text-gray-600 text-center`}>{photo.alt}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

// Seção de Disponibilidade (Calendário)
const AvailabilitySection = () => {
  const [selectedDate, setSelectedDate] = useState(''); // Armazena a data selecionada no formato string

  // Simulação de datas ocupadas (no formato 'YYYY-MM-DD')
  const bookedDates = {
    '2025-08-10': { selected: true, marked: true, dotColor: 'red', customStyles: { container: { backgroundColor: tw.color('red-200') }, text: { color: tw.color('red-800') } } },
    '2025-08-15': { selected: true, marked: true, dotColor: 'red', customStyles: { container: { backgroundColor: tw.color('red-200') }, text: { color: tw.color('red-800') } } },
    '2025-09-05': { selected: true, marked: true, dotColor: 'red', customStyles: { container: { backgroundColor: tw.color('red-200') }, text: { color: tw.color('red-800') } } },
    '2025-09-20': { selected: true, marked: true, dotColor: 'red', customStyles: { container: { backgroundColor: tw.color('red-200') }, text: { color: tw.color('red-800') } } },
  };

  // Função para lidar com a seleção de data
  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    // Você pode adicionar lógica aqui para mostrar detalhes da data selecionada
  };

  return (
    <View style={tw`p-4 items-center`}>
      <Text style={tw`text-2xl font-semibold text-gray-700 mb-4 text-center`}>Verifique a Disponibilidade</Text>
      <View style={tw`w-full max-w-sm rounded-lg shadow-md border-none p-2`}>
        <Calendar
          onDayPress={onDayPress}
          markedDates={{
            ...bookedDates,
            ...(selectedDate ? { [selectedDate]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' } } : {})
          }}
          minDate={new Date().toISOString().split('T')[0]} // Não permite selecionar datas passadas
          theme={{
            calendarBackground: tw.color('white'),
            textSectionTitleColor: tw.color('gray-500'),
            selectedDayBackgroundColor: tw.color('blue-600'),
            selectedDayTextColor: tw.color('white'),
            todayTextColor: tw.color('blue-600'),
            dayTextColor: tw.color('gray-700'),
            textDisabledColor: tw.color('gray-400'),
            arrowColor: tw.color('blue-600'),
            monthTextColor: tw.color('gray-800'),
            textDayFontFamily: 'System',
            textMonthFontFamily: 'System',
            textDayHeaderFontFamily: 'System',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '500',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 14,
          }}
        />
      </View>
      <Text style={tw`text-gray-600 text-sm mt-4 text-center`}>
        <Text style={tw`w-3 h-3 bg-red-200 rounded-full mr-2`}> </Text>
        Datas em vermelho estão ocupadas.
      </Text>
      <Text style={tw`text-gray-600 text-sm mt-2 text-center`}>
        Para solicitar uma data, preencha o formulário na seção "Contato".
      </Text>
    </View>
  );
};

// Seção de Contato/Solicitação
const ContactSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipoEvento: '',
    dataPreferencial: '',
    mensagem: '',
  });

  const handleChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    // Aqui você enviaria os dados para um backend (API)
    console.log('Dados da solicitação:', formData);
    Alert.alert('Sucesso!', 'Solicitação enviada com sucesso! Em breve entraremos em contato.');
    // Limpar formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      tipoEvento: '',
      dataPreferencial: '',
      mensagem: '',
    });
  };

  return (
    <View style={tw`p-4`}>
      <Text style={tw`text-2xl font-semibold text-gray-700 mb-4 text-center`}>Solicite seu Orçamento</Text>
      <View style={tw`space-y-4`}>
        <View>
          <Text style={tw`text-sm font-medium text-gray-700 mb-1`}>Nome Completo</Text>
          <TextInput
            style={tw`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm`}
            onChangeText={(text) => handleChange('nome', text)}
            value={formData.nome}
            placeholder="Seu nome"
            required
          />
        </View>
        <View>
          <Text style={tw`text-sm font-medium text-gray-700 mb-1`}>E-mail</Text>
          <TextInput
            style={tw`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm`}
            onChangeText={(text) => handleChange('email', text)}
            value={formData.email}
            placeholder="seu.email@exemplo.com"
            keyboardType="email-address"
            required
          />
        </View>
        <View>
          <Text style={tw`text-sm font-medium text-gray-700 mb-1`}>Telefone</Text>
          <TextInput
            style={tw`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm`}
            onChangeText={(text) => handleChange('telefone', text)}
            value={formData.telefone}
            placeholder="(XX) XXXXX-XXXX"
            keyboardType="phone-pad"
          />
        </View>
        <View>
          <Text style={tw`text-sm font-medium text-gray-700 mb-1`}>Tipo de Evento</Text>
          <View style={tw`border border-gray-300 rounded-md shadow-sm`}>
            <Picker
              selectedValue={formData.tipoEvento}
              onValueChange={(itemValue) => handleChange('tipoEvento', itemValue)}
              style={tw`w-full`}
            >
              <Picker.Item label="Selecione..." value="" />
              <Picker.Item label="Festa" value="festa" />
              <Picker.Item label="Aniversário de Debutante" value="debutante" />
              <Picker.Item label="Casamento" value="casamento" />
              <Picker.Item label="Almoço Empresarial" value="empresarial" />
              <Picker.Item label="Outro" value="outro" />
            </Picker>
          </View>
        </View>
        <View>
          <Text style={tw`text-sm font-medium text-gray-700 mb-1`}>Data Preferencial (opcional)</Text>
          <TextInput
            style={tw`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm`}
            onChangeText={(text) => handleChange('dataPreferencial', text)}
            value={formData.dataPreferencial}
            placeholder="AAAA-MM-DD"
            keyboardType="numeric" // Para facilitar a entrada de data
          />
        </View>
        <View>
          <Text style={tw`text-sm font-medium text-gray-700 mb-1`}>Mensagem / Detalhes</Text>
          <TextInput
            style={tw`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm h-24`}
            onChangeText={(text) => handleChange('mensagem', text)}
            value={formData.mensagem}
            placeholder="Descreva seu evento aqui..."
            multiline
            numberOfLines={4}
          />
        </View>
        <TouchableOpacity
          onPress={handleSubmit}
          style={tw`w-full flex-row justify-center py-2 px-4 border border-transparent rounded-md shadow-sm bg-blue-600`}
        >
          <Text style={tw`text-sm font-medium text-white`}>Enviar Solicitação</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;