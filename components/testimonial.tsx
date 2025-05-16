import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

interface TestimonialProps {
  name: string
  role: string
  company: string
  quote: string
  imageSrc: string
}

export function Testimonial({ name, role, company, quote, imageSrc }: TestimonialProps) {
  return (
    <Card className="border-0 shadow-sm">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          <QuoteIcon className="h-6 w-6 text-emerald-500" />
          <p className="text-gray-600 italic">"{quote}"</p>
          <div className="flex items-center space-x-4 pt-4">
            <Image src={imageSrc || "/placeholder.svg"} alt={name} width={50} height={50} className="rounded-full" />
            <div>
              <h4 className="font-semibold">{name}</h4>
              <p className="text-sm text-gray-500">
                {role}, {company}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
