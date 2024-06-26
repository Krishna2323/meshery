/**
 * @generated SignedSource<<351072a663eef7bd57786864c22f673b>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type MeshType = "ALL_MESH" | "INVALID_MESH" | "APP_MESH" | "CITRIX_SERVICE_MESH" | "CONSUL" | "ISTIO" | "KUMA" | "LINKERD" | "TRAEFIK_MESH" | "OCTARINE" | "NETWORK_SERVICE_MESH" | "TANZU" | "OPEN_SERVICE_MESH" | "NGINX_SERVICE_MESH" | "CILIUM_SERVICE_MESH" | "%future added value";
export type ServiceMeshFilter = {|
  type?: ?MeshType,
  k8sClusterIDs?: ?$ReadOnlyArray<string>,
|};
export type DataPlanesQuery$variables = {|
  filter?: ?ServiceMeshFilter,
|};
export type DataPlanesQuery$data = {|
  +dataPlanesState: $ReadOnlyArray<{|
    +name: string,
    +proxies: $ReadOnlyArray<{|
      +controlPlaneMemberName: string,
      +containerName: string,
      +image: string,
      +status: ?{|
        +containerStatusName: string,
        +image: string,
        +state: ?any,
        +lastState: ?any,
        +ready: boolean,
        +restartCount: ?any,
        +started: boolean,
        +imageID: ?any,
        +containerID: ?any,
      |},
      +ports: ?$ReadOnlyArray<?{|
        +name: ?string,
        +containerPort: number,
        +protocol: string,
      |}>,
      +resources: ?any,
    |}>,
  |}>,
|};
export type DataPlanesQuery = {|
  variables: DataPlanesQuery$variables,
  response: DataPlanesQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filter"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "image",
  "storageKey": null
},
v3 = [
  {
    "alias": "dataPlanesState",
    "args": [
      {
        "kind": "Variable",
        "name": "filter",
        "variableName": "filter"
      }
    ],
    "concreteType": "DataPlane",
    "kind": "LinkedField",
    "name": "getDataPlanes",
    "plural": true,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Container",
        "kind": "LinkedField",
        "name": "proxies",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "controlPlaneMemberName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "containerName",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Container_Status",
            "kind": "LinkedField",
            "name": "status",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "containerStatusName",
                "storageKey": null
              },
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "state",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lastState",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "ready",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "restartCount",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "started",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "imageID",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "containerID",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Container_Port",
            "kind": "LinkedField",
            "name": "ports",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "containerPort",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "protocol",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "resources",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DataPlanesQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DataPlanesQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "b2b75c4ae9ac1a89e28f4d4454fe6a1f",
    "id": null,
    "metadata": {},
    "name": "DataPlanesQuery",
    "operationKind": "query",
    "text": "query DataPlanesQuery(\n  $filter: ServiceMeshFilter\n) {\n  dataPlanesState: getDataPlanes(filter: $filter) {\n    name\n    proxies {\n      controlPlaneMemberName\n      containerName\n      image\n      status {\n        containerStatusName\n        image\n        state\n        lastState\n        ready\n        restartCount\n        started\n        imageID\n        containerID\n      }\n      ports {\n        name\n        containerPort\n        protocol\n      }\n      resources\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "972da366246c7024e36e973fb98f27a5";

module.exports = ((node/*: any*/)/*: Query<
  DataPlanesQuery$variables,
  DataPlanesQuery$data,
>*/);
