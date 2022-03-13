import Select from 'react-select'
import CreatableSelect from 'react-select//creatable'
import makeAnimated from 'react-select//animated'
import React from 'react'
import cl from '../styles/selectClass.module.css'
import { Link } from 'react-router-dom'

const SelectClass = () => {

    const options1 = [
        { value: '10', label: '10' },
        { value: '20', label: '20' },
        { value: '30', label: '30' }
    ]

    const options2 = [
        { value: '10', label: 'Столы' },
        { value: '20', label: 'Стулья' },
        { value: '30', label: 'Компьютеры' },
        { value: '40', label: 'Столы' },
        { value: '50', label: 'Стулья' },
        { value: '60', label: 'Компьютеры' }
    ]

    const options3 = [
        { value: '10', label: 'Музыкальная репетиция' },
        { value: '20', label: 'Мероприятие' },
        { value: '30', label: 'Театральная репитиция' }
    ]

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            height: '70px',
            border: '1px solid rgba(25, 188, 228, 0.3)'
        }),
    }

    const animatedComponents = makeAnimated();

    return (
        <div className={cl.selectClassContent}>
            <h2 className={cl.firstTitle}>Подобрать аудиторию</h2>
            <p className={cl.selectClassDesc}>На этом сайте вы можете выбрат необходимую аудиторию для вашего сайта</p>
            <form action="" className={cl.formStart}>
                <Select
                    options={options1}
                    placeholder='Кол-во человек'
                    styles={customStyles}
                />
                <CreatableSelect 
                    isMulti
                    placeholder='Вместимость человек'
                    options={options2}
                    styles={customStyles}
                    components={animatedComponents}
                    closeMenuOnSelect={false}
                    maxMenuHeight='2'
                />
                <Select 
                    options={options3}
                    placeholder='Варианты мероприятия' 
                    styles={customStyles}
                />
                <Link to="">Подобрать</Link>
            </form>
        </div>
    )
}

export default SelectClass