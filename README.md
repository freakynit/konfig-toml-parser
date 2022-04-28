# konfig-s3-loader
TOML parser plugin for [konfig](https://github.com/freakynit/konfig)

## Usage:
```typescript
// npm install --save konfig-toml-parser
import {konfig, contracts} from 'konfig';
import {TomlParser} from 'konfig-toml-parser';

const config = await konfig('config.toml', {parser: TomlParser});
```

## License

This project is open source and available under the [MIT License](LICENSE).
