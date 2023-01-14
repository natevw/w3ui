// via https://filecoinproject.slack.com/archives/C02BZPRS9HP/p1669658502951759?thread_ts=1669658366.189139&cid=C02BZPRS9HP

import { connect } from '@ucanto/client'
import { CAR, CBOR, HTTP } from '@ucanto/transport'
import * as DID from '@ipld/dag-ucan/did'

// export const accessServiceURL = new URL('https://w3access-staging.protocol-labs.workers.dev')
// export const accessServicePrincipal = DID.parse('did:key:z6MkwTYX2JHHd8bmaEuDdS1LJjrpFspirjDcQ4DvAiDP49Gm')
export const accessServiceURL = new URL('http://localhost:8787')
export const accessServicePrincipal = DID.parse('did:web:local.web3.storage')


export const accessServiceConnection = connect({
  id: accessServicePrincipal,
  encoder: CAR,
  decoder: CBOR,
  channel: HTTP.open({
    url: accessServiceURL,
    method: 'POST'
  })
})

export const uploadServiceURL = new URL('https://staging.up.web3.storage')
export const uploadServicePrincipal = DID.parse('did:key:z6MkhcbEpJpEvNVDd3n5RurquVdqs5dPU16JDU5VZTDtFgnn')

export const uploadServiceConnection = connect({
  id: uploadServicePrincipal,
  encoder: CAR,
  decoder: CBOR,
  channel: HTTP.open({
    url: uploadServiceURL,
    method: 'POST'
  })
})
