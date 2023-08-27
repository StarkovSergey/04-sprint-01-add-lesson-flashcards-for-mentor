import s from './DecksList.module.css'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { selectDecks } from '../decks-selectors.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { fetchDecksThunk } from '../decks-thunks.ts'

export const DecksList = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector(selectDecks)

  useEffect(() => {
    dispatch(fetchDecksThunk())
  }, [])

  return (
    <ul className={s.list}>
      {decks.map((deck) => (
        <DeckItem key={deck.id} deck={deck} />
      ))}
    </ul>
  )
}
