create table powerstats as
select
	name,	
	real_name,
	full_name,
	alignment,
	creator,
	intelligence_score,
	strength_score,
	speed_score,
	durability_score,
	power_score,
	combat_score
from superhero

create table biography as 
select
	name,	
	real_name,
	full_name,
	history_text,
	powers_text,
	superpowers,
	alter_egos,
	aliases,
	place_of_birth,
	first_appearance,
	creator,
	alignment,
	occupation,
	base,
	teams,
	relatives,
	gender,
	type_race,
	height,
	weight,
	eye_color,
	hair_color,
	skin_color,
	img
from superhero

select * from powerstats