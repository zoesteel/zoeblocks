/**
 * WordPress dependencies
 */
import { 
  BlockControls,
	RichText,
	AlignmentToolbar
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
// import { BackgroundControls } from '../../../components/background';
// import { ContentFieldsControls } from '../../../components/contentfields';

function QuoteControls(props) {

  const { setAttributes, attributes } = props;
  const { alignment } = attributes;

  const onChangeAlignment = ( newAlignment ) => {
    setAttributes( {
        alignment: newAlignment === undefined ? 'none' : newAlignment,
    } );
  };
  return (
    <>
      <BlockControls>
        <AlignmentToolbar
          value={ alignment }
          onChange={ onChangeAlignment }
        />
      </BlockControls>
    </>
  );
}

export default QuoteControls;
