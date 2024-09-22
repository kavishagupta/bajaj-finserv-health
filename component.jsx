
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [operationCode, setOperationCode] = useState(null)
  const [status, setStatus] = useState(null)
  const [userId, setUserId] = useState(null)
  const [collegeEmail, setCollegeEmail] = useState(null)
  const [collegeRollNumber, setCollegeRollNumber] = useState(null)
  const [numbers, setNumbers] = useState([])
  const [alphabets, setAlphabets] = useState([])
  const [highestLowercase, setHighestLowercase] = useState([])
  useEffect(() => {
    const fetchOperationCode = async () => {
      try {
        const response = await fetch("/api/endpoint")
        const data = await response.json()
        setOperationCode(data.operation_code)
      } catch (error) {
        console.error("Error fetching operation code:", error)
      }
    }
    fetchOperationCode()
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      })
      const data = await response.json()
      setStatus(data.status)
      setUserId(data.user_id)
      setCollegeEmail(data.college_email)
      setCollegeRollNumber(data.college_roll_number)
      setNumbers(data.numbers)
      setAlphabets(data.alphabets)
      setHighestLowercase(data.highest_lowercase)
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-background rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Backend REST API</h2>
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">GET Request</h3>
        <p>Operation Code: {operationCode}</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="text-lg font-medium">POST Request</h3>
        <div>
          <label htmlFor="status" className="block font-medium mb-1">
            Status
          </label>
          <input
            type="text"
            id="status"
            value={status || ""}
            readOnly
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="user-id" className="block font-medium mb-1">
            User ID
          </label>
          <input
            type="text"
            id="user-id"
            value={userId || ""}
            readOnly
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="college-email" className="block font-medium mb-1">
            College Email
          </label>
          <input
            type="email"
            id="college-email"
            value={collegeEmail || ""}
            readOnly
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="college-roll-number" className="block font-medium mb-1">
            College Roll Number
          </label>
          <input
            type="text"
            id="college-roll-number"
            value={collegeRollNumber || ""}
            readOnly
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="numbers" className="block font-medium mb-1">
            Numbers
          </label>
          <textarea
            id="numbers"
            value={numbers.join(", ")}
            readOnly
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="alphabets" className="block font-medium mb-1">
            Alphabets
          </label>
          <textarea
            id="alphabets"
            value={alphabets.join(", ")}
            readOnly
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="highest-lowercase" className="block font-medium mb-1">
            Highest Lowercase
          </label>
          <textarea
            id="highest-lowercase"
            value={highestLowercase.join(", ")}
            readOnly
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  )
}