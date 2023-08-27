# Дополнительный урок 01 для спринта 04 (Четверг)

[Swagger документация](https://api.flashcards.andrii.es/docs)

Задание 1 (пишем get-запрос)
1. Написать get-запрос за decks и протипизировать ответ (fetchDecks). Параметры указывать и типизировать не надо
2. Отправить запрос при монтировании компонента DecksList

Задание 2 (redux flow) - отрисовать колоды, используя redux state
1. Написать action, который сетает decks в redux state
2. Написать case в reducer для этого action
3. Задиспатить action
4. Получить decks с помощью useAppSelector в компоненте DecksList
5. Отрендерить компоненты используя компонент DeckItem

Задание 3 (async redux flow) - вынести асинхронную логику из компонента DecksList в thunk
1. Написать fetchDecksThunk (файл decks-thunks.ts)
2. Использовать fetchDecksThunk в компоненте DecksList