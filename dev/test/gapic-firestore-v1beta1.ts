// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as assert from 'assert';
import {describe, it} from 'mocha';
import * as protosTypes from '../protos/firestore_v1beta1_proto_api';
const firestoreModule = require('../src');

import {PassThrough} from 'stream';

const FAKE_STATUS_CODE = 1;
class FakeError {
  name: string;
  message: string;
  code: number;
  constructor(n: number) {
    this.name = 'fakeName';
    this.message = 'fake message';
    this.code = n;
  }
}
const error = new FakeError(FAKE_STATUS_CODE);
export interface Callback {
  (err: FakeError | null, response?: {} | null): void;
}

export class Operation {
  constructor() {}
  promise() {}
}
function mockSimpleGrpcMethod(
  expectedRequest: {},
  response: {} | null,
  error: FakeError | null
) {
  return (actualRequest: {}, options: {}, callback: Callback) => {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    if (error) {
      callback(error);
    } else if (response) {
      callback(null, response);
    } else {
      callback(null);
    }
  };
}
function mockServerStreamingGrpcMethod(
  expectedRequest: {},
  response: {} | null,
  error: FakeError | null
) {
  return (actualRequest: {}) => {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    const mockStream = new PassThrough({
      objectMode: true,
      transform: (chunk: {}, enc: {}, callback: Callback) => {
        if (error) {
          callback(error);
        } else {
          callback(null, response);
        }
      },
    });
    return mockStream;
  };
}
function mockBidiStreamingGrpcMethod(
  expectedRequest: {},
  response: {} | null,
  error: FakeError | null
) {
  return () => {
    const mockStream = new PassThrough({
      objectMode: true,
      transform: (chunk: {}, enc: {}, callback: Callback) => {
        assert.deepStrictEqual(chunk, expectedRequest);
        if (error) {
          callback(error);
        } else {
          callback(null, response);
        }
      },
    });
    return mockStream;
  };
}
describe('v1beta1.FirestoreClient', () => {
  it('has servicePath', () => {
    const servicePath = firestoreModule.v1beta1.FirestoreClient.servicePath;
    assert(servicePath);
  });
  it('has apiEndpoint', () => {
    const apiEndpoint = firestoreModule.v1beta1.FirestoreClient.apiEndpoint;
    assert(apiEndpoint);
  });
  it('has port', () => {
    const port = firestoreModule.v1beta1.FirestoreClient.port;
    assert(port);
    assert(typeof port === 'number');
  });
  it('should create a client with no option', () => {
    const client = new firestoreModule.v1beta1.FirestoreClient();
    assert(client);
  });
  it('should create a client with gRPC fallback', () => {
    const client = new firestoreModule.v1beta1.FirestoreClient({
      fallback: true,
    });
    assert(client);
  });
  it('has initialize method and supports deferred initialization', async () => {
    const client = new firestoreModule.v1beta1.FirestoreClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.firestoreStub, undefined);
    await client.initialize();
    assert(client.firestoreStub);
  });
  it('has close method', () => {
    const client = new firestoreModule.v1beta1.FirestoreClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.close();
  });
  describe('getDocument', () => {
    it('invokes getDocument without error', done => {
      const client = new firestoreModule.v1beta1.FirestoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.firestore.v1beta1.IGetDocumentRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getDocument = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.getDocument(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getDocument with error', done => {
      const client = new firestoreModule.v1beta1.FirestoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.firestore.v1beta1.IGetDocumentRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getDocument = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.getDocument(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('createDocument', () => {
    it('invokes createDocument without error', done => {
      const client = new firestoreModule.v1beta1.FirestoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.firestore.v1beta1.ICreateDocumentRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createDocument = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.createDocument(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createDocument with error', done => {
      const client = new firestoreModule.v1beta1.FirestoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.firestore.v1beta1.ICreateDocumentRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createDocument = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.createDocument(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('updateDocument', () => {
    it('invokes updateDocument without error', done => {
      const client = new firestoreModule.v1beta1.FirestoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.firestore.v1beta1.IUpdateDocumentRequest = {};
      request.document = {};
      request.document.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateDocument = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.updateDocument(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateDocument with error', done => {
      const client = new firestoreModule.v1beta1.FirestoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.firestore.v1beta1.IUpdateDocumentRequest = {};
      request.document = {};
      request.document.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateDocument = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.updateDocument(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('deleteDocument', () => {
    it('invokes deleteDocument without error', done => {
      const client = new firestoreModule.v1beta1.FirestoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.firestore.v1beta1.IDeleteDocumentRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteDocument = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.deleteDocument(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deleteDocument with error', done => {
      const client = new firestoreModule.v1beta1.FirestoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.firestore.v1beta1.IDeleteDocumentRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteDocument = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.deleteDocument(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('beginTransaction', () => {
    it('invokes beginTransaction without error', done => {
      const client = new firestoreModule.v1beta1.FirestoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.firestore.v1beta1.IBeginTransactionRequest = {};
      request.database = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.beginTransaction = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.beginTransaction(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes beginTransaction with error', done => {
      const client = new firestoreModule.v1beta1.FirestoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.firestore.v1beta1.IBeginTransactionRequest = {};
      request.database = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.beginTransaction = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.beginTransaction(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('commit', () => {
    it('invokes commit without error', done => {
      const client = new firestoreModule.v1beta1.FirestoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.firestore.v1beta1.ICommitRequest = {};
      request.database = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.commit = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.commit(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes commit with error', done => {
      const client = new firestoreModule.v1beta1.FirestoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.firestore.v1beta1.ICommitRequest = {};
      request.database = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.commit = mockSimpleGrpcMethod(request, null, error);
      client.commit(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('rollback', () => {
    it('invokes rollback without error', done => {
      const client = new firestoreModule.v1beta1.FirestoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.firestore.v1beta1.IRollbackRequest = {};
      request.database = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.rollback = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.rollback(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes rollback with error', done => {
      const client = new firestoreModule.v1beta1.FirestoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.firestore.v1beta1.IRollbackRequest = {};
      request.database = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.rollback = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.rollback(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('batchGetDocuments', () => {
    it('invokes batchGetDocuments without error', done => {
      const client = new firestoreModule.v1beta1.FirestoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.firestore.v1beta1.IBatchGetDocumentsRequest = {};
      request.database = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.batchGetDocuments = mockServerStreamingGrpcMethod(
        request,
        expectedResponse,
        null
      );
      const stream = client.batchGetDocuments(request);
      stream.on('data', (response: {}) => {
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
      stream.on('error', (err: FakeError) => {
        done(err);
      });
      stream.write();
    });
    it('invokes batchGetDocuments with error', done => {
      const client = new firestoreModule.v1beta1.FirestoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.firestore.v1beta1.IBatchGetDocumentsRequest = {};
      request.database = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.batchGetDocuments = mockServerStreamingGrpcMethod(
        request,
        null,
        error
      );
      const stream = client.batchGetDocuments(request);
      stream.on('data', () => {
        assert.fail();
      });
      stream.on('error', (err: FakeError) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
      stream.write();
    });
  });
  describe('runQuery', () => {
    it('invokes runQuery without error', done => {
      const client = new firestoreModule.v1beta1.FirestoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.firestore.v1beta1.IRunQueryRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.runQuery = mockServerStreamingGrpcMethod(
        request,
        expectedResponse,
        null
      );
      const stream = client.runQuery(request);
      stream.on('data', (response: {}) => {
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
      stream.on('error', (err: FakeError) => {
        done(err);
      });
      stream.write();
    });
    it('invokes runQuery with error', done => {
      const client = new firestoreModule.v1beta1.FirestoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.firestore.v1beta1.IRunQueryRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.runQuery = mockServerStreamingGrpcMethod(
        request,
        null,
        error
      );
      const stream = client.runQuery(request);
      stream.on('data', () => {
        assert.fail();
      });
      stream.on('error', (err: FakeError) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
      stream.write();
    });
  });
  describe('write', () => {
    it('invokes write without error', done => {
      const client = new firestoreModule.v1beta1.FirestoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.firestore.v1beta1.IWriteRequest = {};
      request.database = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.write = mockBidiStreamingGrpcMethod(
        request,
        expectedResponse,
        null
      );
      const stream = client
        .write()
        .on('data', (response: {}) => {
          assert.deepStrictEqual(response, expectedResponse);
          done();
        })
        .on('error', (err: FakeError) => {
          done(err);
        });
      stream.write(request);
    });
    it('invokes write with error', done => {
      const client = new firestoreModule.v1beta1.FirestoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.firestore.v1beta1.IWriteRequest = {};
      request.database = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.write = mockBidiStreamingGrpcMethod(
        request,
        null,
        error
      );
      const stream = client
        .write()
        .on('data', () => {
          assert.fail();
        })
        .on('error', (err: FakeError) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          done();
        });
      stream.write(request);
    });
  });
  describe('listen', () => {
    it('invokes listen without error', done => {
      const client = new firestoreModule.v1beta1.FirestoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.firestore.v1beta1.IListenRequest = {};
      request.database = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.listen = mockBidiStreamingGrpcMethod(
        request,
        expectedResponse,
        null
      );
      const stream = client
        .listen()
        .on('data', (response: {}) => {
          assert.deepStrictEqual(response, expectedResponse);
          done();
        })
        .on('error', (err: FakeError) => {
          done(err);
        });
      stream.write(request);
    });
    it('invokes listen with error', done => {
      const client = new firestoreModule.v1beta1.FirestoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.firestore.v1beta1.IListenRequest = {};
      request.database = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.listen = mockBidiStreamingGrpcMethod(
        request,
        null,
        error
      );
      const stream = client
        .listen()
        .on('data', () => {
          assert.fail();
        })
        .on('error', (err: FakeError) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          done();
        });
      stream.write(request);
    });
  });
  describe('listDocuments', () => {
    it('invokes listDocuments without error', done => {
      const client = new firestoreModule.v1beta1.FirestoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.firestore.v1beta1.IListDocumentsRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock Grpc layer
      client._innerApiCalls.listDocuments = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      client.listDocuments(request, (err: FakeError, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });
  });
  describe('listDocumentsStream', () => {
    it('invokes listDocumentsStream without error', done => {
      const client = new firestoreModule.v1beta1.FirestoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.firestore.v1beta1.IListDocumentsRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {response: 'data'};
      // Mock Grpc layer
      client._innerApiCalls.listDocuments = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      const stream = client
        .listDocumentsStream(request, {})
        .on('data', (response: {}) => {
          assert.deepStrictEqual(response, expectedResponse);
          done();
        })
        .on('error', (err: FakeError) => {
          done(err);
        });
      stream.write(expectedResponse);
    });
  });
  describe('listCollectionIds', () => {
    it('invokes listCollectionIds without error', done => {
      const client = new firestoreModule.v1beta1.FirestoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.firestore.v1beta1.IListCollectionIdsRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock Grpc layer
      client._innerApiCalls.listCollectionIds = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      client.listCollectionIds(request, (err: FakeError, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });
  });
  describe('listCollectionIdsStream', () => {
    it('invokes listCollectionIdsStream without error', done => {
      const client = new firestoreModule.v1beta1.FirestoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.firestore.v1beta1.IListCollectionIdsRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {response: 'data'};
      // Mock Grpc layer
      client._innerApiCalls.listCollectionIds = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      const stream = client
        .listCollectionIdsStream(request, {})
        .on('data', (response: {}) => {
          assert.deepStrictEqual(response, expectedResponse);
          done();
        })
        .on('error', (err: FakeError) => {
          done(err);
        });
      stream.write(expectedResponse);
    });
  });
});
