// Test case of immediate feedback graphs with 3 nodes. It would look, something
// like this, when drawn in SageModeler:
//
//                         /-------------- \
//                         |               V
// +--------+         +--------+       +--------+
// | Node-1 |-------->| Node-2 |       | Node-3 |
// +--------+         +--------+       +--------+
//                         ^               |
//                         \---------------/

import { ISageGraph } from "../../../src/topology-tagger";

export const immediateFeedback: ISageGraph = {
  "nodes":
    [
      {
        "key": "Node-1",
        "data": {
            "title": "Untitled",
            "isAccumulator": false,
        }
      },
      {
        "key": "Node-2",
        "data": {
            "title": "Untitled 2",
            "isAccumulator": false,
        }
      },
      {
        "key": "Node-3",
        "data": {
            "title": "Untitled 3",
            "isAccumulator": false,
        }
      }
    ],
  "links":
    [
      {
        "title": "",
        "sourceNode": "Node-1",
        "targetNode": "Node-2",
      },
      {
        "title": "",
        "sourceNode": "Node-2",
        "targetNode": "Node-3",
      },
      {
        "title": "",
        "sourceNode": "Node-3",
        "targetNode": "Node-2",
      }
    ]
};
