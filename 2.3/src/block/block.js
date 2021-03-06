/**
 * BLOCK: my-first-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-my-first-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'My First Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'my-first-block — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],
	attributes: {
		textData: {
			// source: 'attribute',
			// attribute: 'data-text',
			// selector: 'p'

			// source: 'text',
			// selector: 'p'

			source: 'html',
			selector: 'p'

			// source: 'children',
			// selector: 'p'

			
		}
		// ,images: {
		// 	source: 'query',
		// 	selector: 'img',
		// 	query:  {
		// 		src: { source: 'attribute', attribute: 'src'},
		// 		alt: { source: 'attribute', attribute: 'alt'}
				
		// 	}
		// }
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function( props ) {
		
		let {attributes: {textData}, setAttributes} = props;
		

		function textBoxChange(e) {
			setAttributes({textData: e.target.value });
		}

		return (
			<div className={ props.className }>
				<input type="text" value={textData} onChange={ textBoxChange }/>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( props ) {

		let {attributes: {textData}} = props;
		
		return (
			<div>
				<p>{textData}</p>
			</div>
		);
	},
} );
