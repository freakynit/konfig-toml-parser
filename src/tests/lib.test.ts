import TomlParser from '../lib'

const sampleTomlContent = `
title = "TOML Example"

[owner]
name = "Tom Preston-Werner"
dob = 1979-05-27T07:32:00-08:00 # First class dates

[database]
server = "192.168.1.1"
ports = [ 8000, 8001, 8002 ]
connection_max = 5000
enabled = true

[servers]

  # Indentation (tabs and/or spaces) is allowed but not required
  [servers.alpha]
  ip = "10.0.0.1"
  dc = "eqdc10"

  [servers.beta]
  ip = "10.0.0.2"
  dc = "eqdc10"

[clients]
data = [ ["gamma", "delta"], [1, 2] ]

# Line breaks are OK when inside arrays
hosts = [
  "alpha",
  "omega"
]
`;

const expectedParsed = {
    'title': 'TOML Example',
    'owner': {
        'name': 'Tom Preston-Werner',
        'dob': new Date('1979-05-27T15:32:00.000Z')
    },
    'database': {
        'server': '192.168.1.1',
        'ports': [
            8000,
            8001,
            8002
        ],
        'connection_max': 5000,
        'enabled': true
    },
    'servers': {
        'alpha': {
            'ip': '10.0.0.1',
            'dc': 'eqdc10'
        },
        'beta': {
            'ip': '10.0.0.2',
            'dc': 'eqdc10'
        }
    },
    'clients': {
        'data': [
            [
                'gamma',
                'delta'
            ],
            [
                1,
                2
            ]
        ],
        'hosts': [
            'alpha',
            'omega'
        ]
    }
};

describe('Toml parser Tests', () => {
    test('Should be able to parse sample toml', async () => {
        let parsed = TomlParser.parse(sampleTomlContent);
        expect(parsed).toEqual(expectedParsed);
    });
})
