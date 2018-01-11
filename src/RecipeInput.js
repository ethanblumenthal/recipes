import React, {Component} from 'react';
import './RecipeInput.css';

class RecipeInput extends Component {
    static defaultProps = {
        onClose() {}
    }

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            instructions: '',
            ingredients: [''],
            img: ''
        };
    }
    render() {
        const {title, instructions, ingredients, img} = this.state;
        const {oncClose} = this.props;
        let inputs = ingredients.map((ing, i) => (
            <div
                className="recipe-form-line"
                key={`ingredient-${i}`}
            >
                <label>
                    <input
                        type="text"
                        name={`ingredient-${i}`}
                        value={ing}
                        size={45}
                        autoComplete="off"
                        placeholder="ingredient"
                        onChange={() => {}}
                    />
                </label>
            </div>
        ));
    }
}

export default RecipeInput;