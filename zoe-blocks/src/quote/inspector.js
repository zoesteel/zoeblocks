/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { FontSizePicker, ToggleControl, Panel, PanelBody, PanelRow } from '@wordpress/components';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
/**
 * Internal dependencies
 */
// import withColorsFormat from './with_colors_format';
// import { BackgroundInspector } from '../../../components/background';
// import { SpacingInspector } from '../../../components/spacing';

/**
 * Inspector controls
 */
function QuoteInspector(props) {
		const { setAttributes, attributes } = props;
		const { 
			quoteColor,
			authorColor,
			showAuthor,
			showIcon,
			iconColor,
			fontSize
		} = attributes;

	const onChangeColour = ( newColor ) => {
		setAttributes( { quoteColor: newColor } );
	}
	
	const onChangeAuthorColour = ( newColor ) => {
		setAttributes( { authorColor: newColor } );
	}
	const onChangeIconColour = ( newColor ) => {
		setAttributes( { iconColor: newColor } );
	}
	const onChangeFontSize = ( newFontSize ) => {
		setAttributes( { fontSize: newFontSize } );
	}

		return (
			<>
				<InspectorControls>
					<Panel>
						<PanelBody title={ __( 'Display Settings', 'zoe-blocks' )} initialOpen={ true }>
							<PanelRow>
								<ToggleControl
								label={ __( 'Show author', 'zoe-blocks' )}
								checked={ showAuthor }
								onChange={ () => {
									setAttributes( {
										showAuthor : ! showAuthor,
									} );
								} }
								/>
							</PanelRow>
							<PanelRow>
								<ToggleControl
									label={ __( 'Show icon', 'zoe-blocks' )}
									checked={ showIcon }
									onChange={ () => {
										setAttributes( {
											showIcon : ! showIcon,
										} );
									} }
								/>	
							</PanelRow>
							<PanelRow>
								<FontSizePicker
									fontSizes={[
										{
											name: __( 'Small' ),
											slug: 'small',
											size: 12,
										},
										{
											name: __( 'Big' ),
											slug: 'big',
											size: 26,
										},
									]}
									value={ fontSize }
									fallbackFontSize={ 12 }
									onChange={onChangeFontSize}
									withSlider
								/>
							</PanelRow>
						</PanelBody>
					</Panel>
					<PanelColorSettings
						title={ __( 'Color settings', 'zoe-blocks' ) }
						initialOpen={ false }
						colorSettings={ [
							{
								value: quoteColor || '#242424',
								onChange: onChangeColour,
								label: __( 'Quote Color', 'zoe-blocks' ),
							},
							showAuthor && {
								value: authorColor || '#242424',
								onChange: onChangeAuthorColour,
								label: __( 'Author Color', 'zoe-blocks' ),
							},	
							showIcon && {
								value:  iconColor || '#242424',
								onChange: onChangeIconColour,
								label: __( 'Icon Color', 'zoe-blocks' ),
							},
							
						] }
					/>
					</InspectorControls>
			</>
		);
}

export default QuoteInspector;
