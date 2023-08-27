# Дополнительный урок 01 для спринта 04 (Четверг)

[Swagger документация](https://api.flashcards.andrii.es/docs)

Задание 1 (пишем get-запрос)
1. Написать get-запрос и протипизировать ответ
2. Отправить запрос при монтировании компонента DecksList

Задание 2 (async redux flow)
1. Написать action, который сетает decks в redux state
2. Написать case в reducer для этого action
3. Написать thunk для получение decks
4. Получить decks с помощью useAppSelector в компоненте DecksList
5. Задписпатчитьь thunk при монтировании компонента DecksList

Задание 3 (create deck)
1. Написать post-запрос
2. Написать thunk для создания deck
3. Написать action для добавление deck в redux state
4. Диспатчить thunk при отправке формы