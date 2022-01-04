// Test case of 2 nodes, 1 is a collector, with one link. It would look like
// this, when drawn in SageModeler (where double-line top/bottom node borders
// means the node is a collector):
//
// +--------+     +========+
// | Node-1 |---->| Node-2 |
// +--------+     +========+

import { ISageGraph } from "../../../src/topology-tagger"

export const simpleTwoNodeGraph: ISageGraph =
  {
  "nodes":
    [
      {
        "key":"Node-1",
        "data":{
          "title":"Untitled",
          "isAccumulator":false
        }
      },
      {
        "key":"Node-2",
        "data":{
          "title":"Untitled 2",
          "isAccumulator":true,
        }
      }
    ],
  "links":
    [
      {
        "title":"",
        "sourceNode":"Node-1",
        "targetNode":"Node-2"
      }
    ]
  }
