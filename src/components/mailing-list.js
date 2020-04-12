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
          width: `100%`,
          maxWidth: `420px`,
          padding: rhythm(1),
        }}
      >
        <div>
          <p>Subscribe to level up your DeFi game!</p>
        </div>
        <div style={{ display: `flex`, flexDirection: `column` }}>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="first.name@gmail.com"
            style={{
              borderBottomLeftRadius: `0`,
              borderBottomRightRadius: `0`,
            }}
          />
          <button
            style={{
              background: `var(--highlight)`,
              color: `white`,
              borderTopLeftRadius: `0`,
              borderTopRightRadius: `0`,
            }}
            onClick={handleSubmit}
          >
            Sign Up
          </button>
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
