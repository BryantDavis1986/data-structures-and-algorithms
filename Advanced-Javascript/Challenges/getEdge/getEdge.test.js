const getEdge = require('./getEdge.js');
const { Graph } = require('../../data-structure/graph/graph.js');

const graph = new Graph();
    const A = graph.addVertex('Pandora');
    const B = graph.addVertex('Metroville');
    const C = graph.addVertex('Narnia');
    const D = graph.addVertex('Naboo');
    const E = graph.addVertex('Corresant');

    graph.addEdge(A, B, weight=82);
    graph.addEdge(B,C, weight=37);
    graph.addEdge(C,D, weight=250);
    graph.addEdge(B,D, weight = 26);
    graph.addEdge(A,E, weight = 50000);

    const cities = ['Pandora', 'Metroville']
describe('getEdge', () => {
    it('happy path', () => {
        expect(getEdge(graph, cities)).toEqual({totalCost: 82, true: true});
        expect(getEdge(graph, ['Pandora', 'Metroville', 'Naboo'])).toEqual({totalCost: 108, true: true})
        expect(getEdge(graph, ['Pandora', 'Naboo'])).toEqual({totalCost: 0, false: false})
        expect(getEdge(graph, ['Pandora', 'Metroville', 'Corresant'])).toEqual({totalCost: 0, false: false})


    })
})