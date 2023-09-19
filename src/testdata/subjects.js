const subjects = new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            {
                name: "Історія Доти",
                group: "401",
                teacher: "Расщектаєв Антон Володимирович",
                kefedra: "Кафедра дослідження збірок",
                faculty: "Факультет Дотознавства",
            },
            {
                name: "Основи лісного фарму лісного фарму лісного фарму",
                group: "402",
                teacher: "Лелюк Богдан Петрович",
                kefedra: "Кафедра дослідження збірок",
                faculty: "Факультет Дотознавства",
            },
            {
                name: "Хитрощі кастомки",
                group: "501",
                teacher: "Сімен Семен Семенович",
                kefedra: "Кафедра кастомки",
                faculty: "Факультет Дотознавства",
            },
            {
                name: "Теорія ймовірності в кастомці",
                group: "502",
                teacher: "Венгренович Богдан",
                kefedra: "Кафедра кастомки",
                faculty: "Факультет Дотознавства",
            },
            {
                name: "Хитрощі кастомки",
                group: "201",
                teacher: "Зіпуля Тяу Тянович",
                kefedra: "Кафедра дворового фрістайлу",
                faculty: "Рівний факультет",
            },
            {
                name: "Теорія ймовірності в кастомці",
                group: "302",
                teacher: "Біллі Херінгтон",
                kefedra: "Кафедра пікапу",
                faculty: "Рівний факультет",
            },
        ])
    }, 1000);
});

export default subjects;