import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { UserContext } from '../../store/UserContext';

const DepartmentChoose = () => {
    const { setDepartment, universityDepartments, meetsDepartmentRequirements, setCurrentStatus, statuses, departmentPopupVisible, setDepartmentPopupVisible } = useContext(UserContext);
    const [selectedDepartment, setSelectedDepartment] = useState(null);

    const handleDepartmentSelection = (department) => {
        // Check if user stats meet department requirements
        if (meetsDepartmentRequirements(department)) {
            setSelectedDepartment(department);
            setCurrentStatus(statuses.UNISTUDENT); // Update user department in context
            setDepartment(department);
            setDepartmentPopupVisible(false); // Close popup after successful enrollment
        } else {
            alert('Your stats do not meet the requirements for this department.');
        }
    };


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={departmentPopupVisible}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
                    <Text style={{ fontSize: 18, marginBottom: 20 }}>Hanoi University has become the only university in the world, choose your department</Text>
                    {universityDepartments.map((department, index) => (
                        <TouchableOpacity
                            key={index}
                            disabled={selectedDepartment} // Disable button if a department is already selected
                            onPress={() => handleDepartmentSelection(department)}
                            style={{ padding: 10, marginVertical: 5, backgroundColor: '#eee', borderRadius: 5 }}
                        >
                            <Text>{department.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </Modal>
    );
};

export default DepartmentChoose;