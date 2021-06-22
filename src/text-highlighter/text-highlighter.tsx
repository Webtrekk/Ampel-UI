import * as React from 'react';

interface Props {
    highlightedTexts: Array<string>;
    content: string;
}

class TextHighLighter extends React.Component<Props, {}> {
    public render() {
        const parts = this.props.content.split(new RegExp(`(${this.props.highlightedTexts.join('|')})`, 'g'));
        return (
            <div>
                {parts.map((part, i) => (
                    <span
                        data-qa={`highlighted-${part}`}
                        key={i}
                        className={this.props.highlightedTexts.includes(part) ? 'highlight-text' : ''}
                    >
                        {part}
                    </span>
                ))}
            </div>
        );
    }
}
export { TextHighLighter };