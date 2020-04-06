import React, { useState } from "react"

import addToMailchimp from "gatsby-plugin-mailchimp"

import { rhythm } from "../utils/typography"

const MailingList = () => {
  const [email, setEmail] = useState("")
  const [response, setResponse] = useState(null)
  const handleSubmit = async () => {
    const res = await addToMailchimp(email)
    setResponse(res)
  }
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
        flexDirection: `column`,
        alignItems: `center`,
      }}
    >
      <div
        style={{
          border: `2px solid rgba(0,0,0,0.25)`,
          padding: rhythm(2),
          borderRadius: rhythm(1),
        }}
      >
        <div>
          <p>Subscribe to level up your DeFi game!</p>
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button onClick={handleSubmit}>Sign Up</button>
        </div>
        {response !== null && (
          <div>
            <p
              style={{
                color: response.result === "success" ? "mediumseagreen" : "red",
              }}
            >
              {response.msg}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MailingList
