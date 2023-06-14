/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	RichText
} from '@wordpress/block-editor';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import QuoteControls from './controls';
import QuoteInspector from './inspector';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit( props ) {
	
	const {	attributes, setAttributes } = props;

	const { 
		alignment,
		author,
		authorColor,
		quote,
		quoteColor,
		showIcon,
		showAuthor,
		iconColor,
		iconSize,
		fontSize,
	} = attributes;
	console.log(quoteColor)

	return (
		<>
			<QuoteInspector {...props} />
			<QuoteControls {...props} />
			<blockquote { ...useBlockProps() } style={{textAlign: alignment, fontSize: fontSize}}>
				{showIcon && <span class="dashicons dashicons-editor-quote" style={{color: iconColor}}></span>}
			<p className="wp-block-zoe-blocks-quote__content">
				<RichText
					style={{color: quoteColor}} 
					value={ quote }
					placeholder={ __( 'Write quote', 'zoe-blocks' ) }
					onChange={ ( newQuote ) =>
						setAttributes( { quote: newQuote } )
					}
					keepPlaceholderOnFocus
				/>
				</p>
				{showAuthor && (
					<footer className={ 'wp-block-zoe-blocks-quote__author' } style={{color: authorColor}}>
						<RichText
							value={ author }
							style={ { color: authorColor } }
							placeholder={ __( 'Write citation', 'zoe-blocks' ) }
							onChange={ ( newAuthor ) =>
								setAttributes( { author: newAuthor } )
							}
							keepPlaceholderOnFocus
						/>
					</footer>
				)}
			</blockquote>
		</>
	);
}
