import React, {useState} from 'react';
import './Task4.scss';

const Task4 = () => {
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');
    // const [address, setAddress] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let valid = true;
        const errors = {};

        if (!formData.livingConditions) {
            errors.livingConditions = 'Пожалуйста, выберите жилищные условия';
            valid = false;
        }

        if (!formData.email) {
            errors.email = 'Пожалуйста, введите действительный email';
            valid = false;
        }

        if (!formData.phone) {
            errors.phone = 'Пожалуйста, введите номер телефона';
            valid = false;
        }

        if (!formData.address) {
            errors.address = 'Пожалуйста, введите адрес';
            valid = false;
        }

        setErrors(errors);
        return valid;
    };

    //Поля заполнения
    const [formData, setFormData] = useState({
        name: '',
        profession: '',
        education: '',
        lastJob: '',
        dismissalReason: '',
        maritalStatus: '',
        livingConditions: '',
        phone: '',
        email: '',
        address: '',
        requirem: '',
    });

    //Сброс
    const resetForm = () => {
        setFormData({
            name: '',
            profession: '',
            education: '',
            lastJob: '',
            dismissalReason: '',
            maritalStatus: '',
            livingConditions: '',
            phone: '',
            email: '',
            address: '',
            requirem: '',
        });
    };

    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 5000);
    };

    const handleCheckCompletion = () => {
        const newErrors = {};

        Object.keys(formData).forEach(key => {
            if (formData[key].trim() === '') {
                newErrors[key] = 'Поле должно быть заполнено';
            }
        });

        setErrors(newErrors);
    }


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
        setErrors({...errors, [name]: ''}); // Сброс ошибки при изменении значения поля
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let isValid = true;
        Object.values(formData).forEach(value => {
            if(value.trim() === '') {
                isValid = false;
            }
        });

        if (isValid) {
            setShowPopup(true);
        } else {
            handleCheckCompletion();
        }

        const newErrors = {};

        // Проверка заполненности полей и добавление ошибок в случае незаполненности
        if (formData.name.trim() === '') {
            newErrors.name = 'Пожалуйста, заполните поле "ФИО"';
        }

        if (formData.profession.trim() === '') {
            newErrors.profession = 'Пожалуйста, заполните поле "Профессия"';
        }

        if (formData.education.trim() === '') {
            newErrors.education = 'Пожалуйста, выберите значение для поля "Образование"';
        }

        if (formData.lastJob.trim() === '') {
            newErrors.lastJob = 'Пожалуйста, заполните поле "Место прошлой работы"';
        }

        if (formData.dismissalReason.trim() === '') {
            newErrors.dismissalReason = 'Пожалуйста, заполните поле "Причина увольнения"';
        }

        if (formData.maritalStatus.trim() === '') {
            newErrors.maritalStatus = 'Пожалуйста, заполните поле "Семейное положение"';
        }

        if (formData.livingConditions.trim() === '') {
            newErrors.livingConditions = 'Пожалуйста, заполните поле "Жилищные условия"';
        }

        if (formData.email.trim() === '') {
            newErrors.email = 'Пожалуйста, заполните поле "Email"';
        }

        if (formData.phone.trim() === '') {
            newErrors.phone = 'Пожалуйста, заполните поле "Телефон"';
        }

        if (formData.address.trim() === '') {
            newErrors.address = 'Пожалуйста, заполните поле "Адрес"';
        }

        if (formData.requirem.trim() === '') {
            newErrors.requirem = 'Пожалуйста, заполните поле "Требования к будущей работе"';
        }

        setErrors(newErrors);

        // Если нет ошибок, можно продолжить с отправкой данных
        if (Object.keys(newErrors).length === 0) {
            setShowPopup(true);
        }
    };

    return (

        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Данные о безработном</h2>
                <div className="mainFormContent">

                    <div className="leftColumn">

                        <form>
                            <label>ФИО:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
                            {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}

                            <label>Профессия:</label>
                            <input type="text" name="profession" value={formData.profession} onChange={handleChange}
                                   required/>
                            {errors.profession && <p style={{color: 'red'}}>{errors.profession}</p>}

                            <label>Образование:</label>
                            <select name="education" value={formData.education} onChange={handleChange} required>
                                <option value=""></option>
                                <option value="Высшее">Высшее</option>
                                <option value="Среднее">Среднее</option>
                                <option value="Среднее специальное">Среднее специальное</option>
                                <option value="Неполное высшее">Неполное высшее</option>
                            </select>
                            {errors.education && <p style={{color: 'red'}}>{errors.education}</p>}

                            <label>Место прошлой работы:</label>
                            <input type="text" name="lastJob" value={formData.lastJob} onChange={handleChange}
                                   required/>
                            {errors.lastJob && <p style={{color: 'red'}}>{errors.lastJob}</p>}

                            <label>Прична увольнения:</label>
                            <textarea name="dismissalReason" value={formData.dismissalReason}
                                      onChange={handleChange}></textarea>
                            {errors.dismissalReason && <p style={{color: 'red'}}>{errors.dismissalReason}</p>}
                        </form>

                    </div>
                    <div className="rightColumn">
                        <form>
                            <label>Семейное положение:</label>
                            <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}
                                    required>
                                <option value=""></option>
                                <option value="Женат/Замужем">Женат / Замужем</option>
                                <option value="Разведен / Разведена">Разведен / Разведена</option>
                                <option value="Вдова / Вдовец">Вдова / Вдовец</option>
                                <option value="В гражданском браке">В гражданском браке</option>
                            </select>
                            {errors.maritalStatus && <p style={{color: 'red'}}>{errors.maritalStatus}</p>}


                            <label>Жилищные условия:</label>
                            <select name="livingConditions" value={formData.livingConditions} onChange={handleChange}
                                    required>
                                <option value=""></option>
                                <option value="Комфортные условия проживания"
                                        title='Это такие условия, когда кроме общепринятых коммунальных удобств, есть и дополнительные. Например, в подъезде сидит консьержка, квартиры в доме большой площади, социальные учреждения находятся в шаговой доступности и прочее. Совокупность этих факторов приводит к тому, что условия проживания называют комфортными '>Комфортные
                                    условия проживания
                                </option>
                                <option value="Удовлетворительные"
                                        title='Присутствуют все необходимые коммунальные удобства'>Удовлетворительные
                                </option>
                                <option value="Неудовлетворительные"
                                        title='Помещение не отвечает требованиям, которые предъявляются к жилому помещению'>Неудовлетворительные
                                </option>
                            </select>
                            {errors.livingConditions && <p style={{color: 'red'}}>{errors.livingConditions}</p>}


                            <label>Email:</label>
                            <input name="email" type="email" value={formData.email} onChange={handleChange} required/>
                            {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}


                            <label>Телефон:</label>
                            <input name="phone" type="tel" value={formData.phone} onChange={handleChange} required/>
                            {errors.phone && <p style={{color: 'red'}}>{errors.phone}</p>}


                            <label>Адрес:</label>
                            <input name="address" type="text" value={formData.address} onChange={handleChange}
                                   required/>
                            {errors.address && <p style={{color: 'red'}}>{errors.address}</p>}


                            <label>Требования к будущей работе:</label>
                            <textarea name="requirem" value={formData.requirem}
                                      onChange={handleChange}></textarea>
                            {errors.requirem && <p style={{color: 'red'}}>{errors.requirem}</p>}

                        </form>
                    </div>


                </div>
                <div className="submitClear">
                    <button type="submit" onClick={togglePopup}>Отправить</button>
                    {showPopup && (
                        <div className="popup">
                            {/*<p>Данные успешно отправлены</p>*/}
                        </div>
                    )}
                    <button type="button" onClick={resetForm}>Очистить</button>
                </div>
            </form>
        </div>
    );
};

export default Task4;