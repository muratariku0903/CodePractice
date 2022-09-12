import { ListNode, TreeNode, createListNode, createTreeNode, getArrFromListNode } from './classes/nodes';
import { TestData } from './classes/test_data';
import { NumArr } from './classes/numarr';
import { MinStack } from './classes/stack';
import { NumNumArr, StrStrArr, Matrix, NumMatrix, NodeType } from './types';
import { fact, is_prime } from './functions/functions';
import { difference, union, intersection } from './functions/set';
import { counter } from './functions/counter';
import { chdir, exit, memoryUsage, nextTick } from 'process';
import { tests } from './test';
import { MinBinaryHeap, MaxBinaryHeap } from './classes/heap';
import Ajv, { JSONSchemaType } from 'ajv';


const ajv = new Ajv();

type RegisterInfo = {
    contractNumber: string;
    name: string;
    nameKana: string;
    postcode: number;
    password: string;
    address: string;
}

const schema: JSONSchemaType<RegisterInfo> = {
    type: 'object',
    required: ['contractNumber', 'name', 'nameKana', 'postcode', 'password', 'address'],
    properties: {
        contractNumber: { type: 'string', pattern: '^[0-9]{20}$' },
        name: { type: 'string', minLength: 1, pattern: '^[^\x20-\x7e]*$', not: { pattern: '^\u3000*$' } },
        nameKana: { type: 'string', minLength: 1, pattern: '^[\u3000ァ-ンヴー]*$', not: { pattern: '^\u3000*$' } },
        postcode: { type: 'integer', minimum: 1000000, maximum: 9999999 },
        password: { type: 'string', pattern: '^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])[a-zA-Z0-9]{8,32}$' },
        address: { type: 'string', pattern: '^[^\x20-\x7e]*$', nullable: true },
    },
    additionalProperties: false,
}

const info: RegisterInfo = {
    contractNumber: '11111111111111111111',
    name: '　村田',
    nameKana: 'ムラタ　',
    postcode: 1000000,
    password: 'AAAAaaa1a',
    address: '千葉県　',
}

const validate = ajv.compile(schema);

const res = validate(info);

console.log(validate.errors);

console.log(res);




