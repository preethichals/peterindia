'use client';
import React from 'react'

async function fetchBook() {
   const response = await fetch('https://ecomm-d72q.onrender.com/api/v1/plan/get-plan/')
   const books = await response.json()
   return books
}
async function BookCard() {

  const books = await fetchBook()
console.log(books)
  return (
<div> {books.plan.id}</div>

  )
}

export default BookCard