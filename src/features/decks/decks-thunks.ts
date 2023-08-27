import { Dispatch } from 'redux'
import { decksAPI } from './decks-api.ts'
import { addDeckAC, setDecksAC } from './decks-reducer.ts'

export const fetchDecksThunk = () => (dispatch: Dispatch) => {
  decksAPI.fetchDecks().then((res) => {
    dispatch(setDecksAC(res.data.items))
  })
}

export const addDeckThunk = (name: string) => async (dispatch: Dispatch) => {
  decksAPI.addDeck(name).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}
