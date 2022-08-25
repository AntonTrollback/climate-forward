export const sponsor = dedent`
  {
    ...sponsorFields
  }
`

export const session = dedent`
  {
    ...sessionFields
    sponsor {
      ...on sponsor {
        ...sponsorFields
      }
    }
    link {
      ...on dialog {
        ...dialogFields
      }
    }
    speakers {
      role
      speaker {
        ...on speaker {
          ...speakerFields
        }
      }
    }
  }
`

export const page = dedent`
  {
    ...pageFields
    body {
      ...on rich_text {
        non-repeat {
          ...non-repeatFields
        }
      }
      ...on main_text {
        non-repeat {
          ...non-repeatFields
        }
      }
      ...on about_text {
        non-repeat {
          ...non-repeatFields
        }
        repeat {
          ...repeatFields
        }
      }
      ...on line {
        non-repeat {
          ...non-repeatFields
        }
      }
      ...on speakers {
        non-repeat {
          ...non-repeatFields
        }
        repeat {
          speaker {
            ...on speaker {
              ...speakerFields
            }
          }
        }
      }
      ...on scroll_target {
        non-repeat {
          ...non-repeatFields
        }
      }
      ...on button {
        non-repeat {
          ...non-repeatFields
          link {
            ...on dialog {
              ...dialogFields
            }
          }
        }
      }
      ...on section_intro {
        non-repeat {
          ...non-repeatFields
          sponsor ${sponsor}
        }
      }
      ...on sponsor {
        non-repeat {
          ...non-repeatFields
          sponsor ${sponsor}
        }
      }
      ...on sponsors {
        repeat {
          ...repeatFields
          sponsor ${sponsor}
        }
      }
      ...on events {
        non-repeat {
          ...non-repeatFields
        }
        repeat {
          ...repeatFields
          event {
            ...eventFields
          }
        }
      }
      ...on video_player {
        non-repeat {
          ...non-repeatFields
        }
      }
      ...on video_banner {
        non-repeat {
          ...non-repeatFields
        }
      }
      ...on legal_numbered_text {
        repeat {
          ...repeatFields
        }
      }
    }
  }
`

export const event = dedent`
  {
    ...eventFields
    sessions {
      session {
        ...on session ${session}
      }
    }
    parent {
      ...on page ${page}
    }
    link {
      ...on dialog {
        ...dialogFields
      }
    }
    body {
      ...on rich_text {
        non-repeat {
          ...non-repeatFields
        }
      }
      ...on section_title {
        non-repeat {
          ...non-repeatFields
        }
      }
      ...on about_text {
        non-repeat {
          ...non-repeatFields
        }
        repeat {
          ...repeatFields
        }
      }
      ...on line {
        non-repeat {
          ...non-repeatFields
        }
      }
      ...on scroll_target {
        non-repeat {
          ...non-repeatFields
        }
      }
      ...on button {
        non-repeat {
          ...non-repeatFields
          link {
            ...on dialog {
              ...dialogFields
            }
          }
        }
      }
      ...on sponsor {
        non-repeat {
          ...non-repeatFields
          sponsor ${sponsor}
        }
      }
      ...on sponsors {
        repeat {
          ...repeatFields
          sponsor ${sponsor}
        }
      }
      ...on venue_map {
        non-repeat {
          ...non-repeatFields
        }
      }
      ...on animation {
        non-repeat {
          ...non-repeatFields
        }
      }
      ...on gallery {
        repeat {
          ...repeatFields
        }
      }
      ...on speakers {
        non-repeat {
          ...non-repeatFields
        }
        repeat {
          speaker {
            ...on speaker {
              ...speakerFields
            }
          }
        }
      }
      ...on program {
        non-repeat {
          ...non-repeatFields
        }
        repeat {
          session ${session}
        }
      }
      ...on live_stream {
        non-repeat {
          ...non-repeatFields
        }
      }
      ...on previous_sessions {
        repeat {
          session ${session}
        }
      }
    }
  }
`

function dedent(strings, ...parts) {
  return strings.reduce((acc, str, i) => {
    return (
      acc +
      str.replace(/^\s+/gm, '\n') +
      (parts[i] || '').replace(/^\s+/gm, '\n')
    )
  }, '')
}
