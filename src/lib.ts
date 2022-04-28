import {contracts} from 'konfig';
import toml from 'toml';

const TomlParser: contracts.Parser = {
    parse(content: string): string {
        return toml.parse(content);
    }
};

export default TomlParser;
