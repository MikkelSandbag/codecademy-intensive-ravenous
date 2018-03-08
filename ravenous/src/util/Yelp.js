const apiKey = 'C8N1sANdteYlOOBB7U6ob7y0Xq3-66T7CwIqEnpyRRK4L0uWaw1wf5-AWiiB4vgKB31w_hx1Gw-yKQGS1gpiUDVbSQGs-SBH6CxtbiGfOgMU2oG8VCwS6iKhAXehWnYx';

class Yelp {
	search(term, location, sortBy) {
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
			headers: {
				Authorization: `Bearer ${apiKey}`
			}
		}).then(response => {
			return response.json();
		}).then(jsonResponse => {
			if (jsonResponse.businesses) {
				return jsonResponse.businesses.map(business => {
					return {
						id: business.id,
						imageSrc: business.image_url,
						name: business.name,
						address: business.location.address1,
						city: business.location.city,
						state: business.location.state,
						zipCode: business.location.zip_code,
						category: business.categories[0].title,
						rating: business.rating,
						reviewCount: business.review_count
					};
				});
			}
		});
	}
}

export default Yelp;