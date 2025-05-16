"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function QuizCard() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const correctAnswer = "b"

  const handleSubmit = () => {
    if (selectedAnswer) {
      setIsSubmitted(true)
    }
  }

  const resetQuiz = () => {
    setSelectedAnswer(null)
    setIsSubmitted(false)
  }

  return (
    <Card className="max-w-3xl mx-auto border-0 shadow-md">
      <CardHeader className="bg-sky-50 rounded-t-lg">
        <CardTitle className="text-xl font-bold">Sample CKS Quiz Question</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="font-medium">
            Which of the following is NOT a recommended practice for securing a Kubernetes cluster?
          </h3>

          <RadioGroup value={selectedAnswer || ""} onValueChange={setSelectedAnswer} disabled={isSubmitted}>
            <div className="flex items-start space-x-2 p-2 rounded-md hover:bg-gray-50">
              <RadioGroupItem value="a" id="option-a" />
              <Label htmlFor="option-a" className="flex-1 cursor-pointer">
                Enabling Role-Based Access Control (RBAC)
              </Label>
            </div>

            <div className="flex items-start space-x-2 p-2 rounded-md hover:bg-gray-50">
              <RadioGroupItem value="b" id="option-b" />
              <Label htmlFor="option-b" className="flex-1 cursor-pointer">
                Using the same service account for all workloads
              </Label>
            </div>

            <div className="flex items-start space-x-2 p-2 rounded-md hover:bg-gray-50">
              <RadioGroupItem value="c" id="option-c" />
              <Label htmlFor="option-c" className="flex-1 cursor-pointer">
                Implementing network policies to restrict pod communication
              </Label>
            </div>

            <div className="flex items-start space-x-2 p-2 rounded-md hover:bg-gray-50">
              <RadioGroupItem value="d" id="option-d" />
              <Label htmlFor="option-d" className="flex-1 cursor-pointer">
                Regularly scanning container images for vulnerabilities
              </Label>
            </div>
          </RadioGroup>
        </div>

        {isSubmitted && (
          <div
            className={`p-4 rounded-md ${selectedAnswer === correctAnswer ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
          >
            {selectedAnswer === correctAnswer ? (
              <p>
                Correct! Using the same service account for all workloads is a security anti-pattern. Each workload
                should have its own service account with the minimum required permissions.
              </p>
            ) : (
              <p>
                Incorrect. The correct answer is B. Using the same service account for all workloads is a security
                anti-pattern. Each workload should have its own service account with the minimum required permissions.
              </p>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end gap-2 p-6 pt-0">
        {isSubmitted ? (
          <Button onClick={resetQuiz} variant="outline">
            Try Another Question
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={!selectedAnswer} className="bg-emerald-500 hover:bg-emerald-600">
            Submit Answer
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
