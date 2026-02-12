'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'

interface FormData {
  fullName: string
  organisation: string
  role: string
  region: string
  email: string
  reasonForInterest: string
}

interface FormErrors {
  [key: string]: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    organisation: '',
    role: '',
    region: '',
    email: '',
    reasonForInterest: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }
    if (!formData.organisation.trim()) {
      newErrors.organisation = 'Organisation is required'
    }
    if (!formData.role.trim()) {
      newErrors.role = 'Role/Title is required'
    }
    if (!formData.region) {
      newErrors.region = 'Region is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.reasonForInterest.trim()) {
      newErrors.reasonForInterest = 'Please tell us why you\'re interested'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setIsSubmitting(false)
      setFormData({
        fullName: '',
        organisation: '',
        role: '',
        region: '',
        email: '',
        reasonForInterest: '',
      })
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    }, 1000)
  }

  if (submitted) {
    return (
      <Card className="border-accent/50 bg-accent/10">
        <CardContent className="pt-8 pb-6">
          <h3 className="font-display text-xl font-semibold text-accent mb-2">
            Thank You
          </h3>
          <p className="text-foreground/80">
            Thank you for your interest in The Technology Boardroom. We will review your application and be in touch shortly.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
          Full Name <span className="text-destructive">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-input border rounded-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-1 focus:ring-accent transition-all ${
            errors.fullName ? 'border-destructive' : 'border-border'
          }`}
          placeholder="Your full name"
        />
        {errors.fullName && (
          <p className="text-xs text-destructive mt-2">{errors.fullName}</p>
        )}
      </div>

      {/* Organisation */}
      <div>
        <label htmlFor="organisation" className="block text-sm font-medium text-foreground mb-2">
          Organisation <span className="text-destructive">*</span>
        </label>
        <input
          type="text"
          id="organisation"
          name="organisation"
          value={formData.organisation}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-input border rounded-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-1 focus:ring-accent transition-all ${
            errors.organisation ? 'border-destructive' : 'border-border'
          }`}
          placeholder="Your organisation"
        />
        {errors.organisation && (
          <p className="text-xs text-destructive mt-2">{errors.organisation}</p>
        )}
      </div>

      {/* Role */}
      <div>
        <label htmlFor="role" className="block text-sm font-medium text-foreground mb-2">
          Role / Title <span className="text-destructive">*</span>
        </label>
        <input
          type="text"
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-input border rounded-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-1 focus:ring-accent transition-all ${
            errors.role ? 'border-destructive' : 'border-border'
          }`}
          placeholder="Your role or title"
        />
        {errors.role && (
          <p className="text-xs text-destructive mt-2">{errors.role}</p>
        )}
      </div>

      {/* Region */}
      <div>
        <label htmlFor="region" className="block text-sm font-medium text-foreground mb-2">
          Region <span className="text-destructive">*</span>
        </label>
        <select
          id="region"
          name="region"
          value={formData.region}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-input border rounded-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent transition-all ${
            errors.region ? 'border-destructive' : 'border-border'
          }`}
        >
          <option value="">Select a region</option>
          <option value="middle-east-africa">Middle East & Africa</option>
          <option value="europe">Europe</option>
          <option value="asia-pacific">Asia Pacific</option>
          <option value="americas">Americas</option>
          <option value="global">Global</option>
        </select>
        {errors.region && (
          <p className="text-xs text-destructive mt-2">{errors.region}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email Address <span className="text-destructive">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-input border rounded-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-1 focus:ring-accent transition-all ${
            errors.email ? 'border-destructive' : 'border-border'
          }`}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="text-xs text-destructive mt-2">{errors.email}</p>
        )}
      </div>

      {/* Reason for Interest */}
      <div>
        <label htmlFor="reasonForInterest" className="block text-sm font-medium text-foreground mb-2">
          Why are you interested in joining? <span className="text-destructive">*</span>
        </label>
        <textarea
          id="reasonForInterest"
          name="reasonForInterest"
          value={formData.reasonForInterest}
          onChange={handleChange}
          rows={4}
          className={`w-full px-4 py-3 bg-input border rounded-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-1 focus:ring-accent transition-all resize-none ${
            errors.reasonForInterest ? 'border-destructive' : 'border-border'
          }`}
          placeholder="Tell us about your interests and what you hope to achieve..."
        />
        {errors.reasonForInterest && (
          <p className="text-xs text-destructive mt-2">{errors.reasonForInterest}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent text-accent-foreground hover:bg-primary disabled:opacity-50"
        size="lg"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Application'}
      </Button>

      <p className="text-xs text-foreground/50 text-center">
        We respect your privacy. Your information will be kept confidential.
      </p>
    </form>
  )
}
