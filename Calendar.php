<?php
class Calendar {	
	public $settings;
	public $columns = 7;
	
	function __construct($settings) {
		$this->settings = $settings;
	}

	function printCSS() {
		?>
		<style>
			.calendar {
				color: #fff;
			}

			.calendar .darkGreen {
				background-color: rgb(81, 154, 81);
			}

			.calendar .lightGreen {
				background-color: rgb(159, 182, 74);
			}

			.calendar .yellow {
				background-color: rgb(230, 215, 55);
			}

			.calendar .orange {
				background-color: rgb(232, 149, 71);
			}

			.calendar .red {
				background-color: rgb(219, 50, 44);
			}

			.calendar table {
				width: 100%;
				table-layout:fixed;
			}

			.calendar td {
				padding: 7.02%;
				border: solid 1px transparent;
				background: rgb(59, 60, 65);
				position: relative;
				cursor: pointer;
			}

			.calendar td.active {
				border-bottom: solid 4px transparent;
			    box-shadow: 0px -2px 3px rgba(0,0,0,.35);
			}
			
			.calendar td .price {
				position: absolute;
				bottom: 5px;
				right: 7px;
			}

			.calendar td .number {
				font-size: 24px;
			}

			.calendar td .dollars {
				font-size: 20px;
			}

			.calendar td .number,
			.calendar td .dollars {
				vertical-align: top;
			}

			.calendar .padding-td {
				background: none;	
				cursor: default;			
			}

			.calendar .not-colored {
				color: rgb(85, 85, 89);
			}

			.calendar td .day-number {
				position: absolute;
				text-align: center;
				top: 20px;
				left: 20px;
				font-size: 22px;
			}

			.calendar .month {
				position: relative;
			}

			.calendar .month-name {
				text-transform: uppercase;
				font-weight: bold;
				letter-spacing: 2px;
				position: absolute;
				left: 0;
			}

			.calendar .month-name.top {
				top: -25px;
			}

			.calendar .month-name.bottom {
				top: 30px;
			}

			.calendar .days-name {
				width: 100%;
			}

			.calendar .days-name .day {
				width: calc(14.28% - 1.83px);
				padding: 10px 0;
				text-align: center;
				background-color: #949599;
				float: left;
				margin: 1px;
				margin-bottom: 60px;
				text-transform: uppercase;
				font-weight: bold;
			}

			.calendar .days-name .day:first-child {
				margin-left: 0;
			}

			.calendar .days-name .day:last-child {
				margin-right: 0;
			}

			.calendar .colors-boxes .box {
				width: calc(20% - 4.8px);
				margin: 0 3px;
				float: left;
				text-align: center;
				margin-bottom: 30px;
			}

			.calendar .colors-boxes .box .top {
				padding: 15px;
			}

			.calendar .colors-boxes .box:first-child {
				margin-left: 0;
			}

			.calendar .colors-boxes .box:last-child {
				margin-right: 0;
			}

			.calendar .colors-boxes .box .number {
				font-size: 35px;
				font-weight: bold;
			}

			.calendar .colors-boxes .box .dollars {
				font-size: 24px;
				font-weight: bold;
			}

			.calendar .colors-boxes .box .number,
			.calendar .colors-boxes .box .dollars {
				vertical-align: top;
			}

			.calendar .colors-boxes .box .description {
				font-size: 12px;
			}

			.calendar .colors-boxes .box .when {
				border-top: solid 1px #fff;
				padding: 10px 0px;
				font-size: 11px;
			}

			@media (max-width: 767px) {
				.calendar td .day-number {
					font-size: 12px;
					top: 5px;
					left: 5px; 
				}

				.calendar td .price {
					bottom: 2px;
					right: 3px;
				}

				.calendar td .number {
					font-size: 15px;
				}

				.calendar td .dollars {
					font-size: 10px;
				}
			}
		</style>

		<script>
			$(document).ready(function() {
				setMonthNameTop();
				
				$(window).resize(function() {
					setMonthNameTop();
				});

				function setMonthNameTop() {
					$('.calendar .month-name').each(function() {
						var m = $(this);
						var top = parseInt($('.calendar td').outerHeight());

						if(m.hasClass('bottom')) {
							m.css('top', top - 25);
						}
						else {
							m.css('top', - 25);
						}
					})
				}
			});
		</script>
		<?php
	}

	function printHTML() {
		return 	'<div class="calendar">' . $this->printDaysName() . $this->printCalendarTable() . $this->printColorsBoxes() . '</div>';	
	}
	
	function printHTMLWidget() {
		return	'<div class="calendar">' . $this->printCalendarTable() . '</div>';	
	}

	function printColorsBoxes() {
		
		$boxesString = "<div class='colors-boxes'>";
		
		
		foreach($this->settings['colors'] as $key => $color) {
			
			
			$price = $color['price']; 
			$at_door_price = $color['at_door_price'];
			$hours = $color['hours'];
			
			$group_rate = $color['group_rate'];
			$online_price = $color['online_price'];
			$vip_after_dark = $color['vip_after_dark'];
			
			$vip_quick_pass = $color['vip_quick_pass'];
			$vip_hex_pass = $color['vip_hex_pass'];
			$vip_after_dark_hex = $color['vip_after_dark_hex'];
			
			$boxesString .= "<div class='box $key'>
				<div class='top'>
					<div class='price'>
						<span class='dollars'>$</span>
						<span class='number'>$price</span>
					</div>
					<div class='description'>$$at_door_price at the door</div>
				</div>
				<div class='when'>$hours</div>
			</div>";
		}
		$boxesString .= '</div><br style="clear:both;" />';
		
		return $boxesString;
	}

	function printDaysName() {
		
		return '<div class="days-name hidden-xs hidden-sm">
			<div class="day">Sunday</div>
			<div class="day">Monday</div>
			<div class="day">Tuesday</div>
			<div class="day">Wednesday</div>
			<div class="day">Thursday</div>
			<div class="day">Friday</div>
			<div class="day">Saturday</div>
			<div style="clear: both;"></div>
		</div>';
	}

	function getDataAttributes($day, $month, $color) {
		
		$price = '';
		$hours = '';
		$at_door_price = '';
		$group_rate = '';
		$online_prie = '';
		
		$vip_after_dark = '';
		$vip_quick_pass = '';
		$vip_hex_pass = '';
		$vip_after_dark_hex = '';
		
        if ($color !== 'not-colored') {
            $attr = $this->settings['colors'][$color];
        }
		if(isset($attr)) {
			
			$price = $attr['price'] ? $attr['price'] : '';
			$hours = $attr['hours'] ? $attr['hours'] : '';
			$at_door_price = $attr['at_door_price'] ? $attr['at_door_price'] : '';
			$group_rate = $attr['group_rate'] ? $attr['group_rate'] : '';
			$online_price = $attr['online_price'] ? $attr['online_price'] : '';
			
			$vip_after_dark = $attr['vip_after_dark'] ? $attr['vip_after_dark'] : '';
			$vip_quick_pass = $attr['vip_quick_pass'] ? $attr['vip_quick_pass'] : '';
			$vip_hex_pass = $attr['vip_hex_pass'] ? $attr['vip_hex_pass'] : '';
			$vip_after_dark_hex = $attr['vip_after_dark_hex'] ? $attr['vip_after_dark_hex'] : '';
			
			$dataAttr = "data-color='$color' data-price='$price' data-hours='$hours' data-atdoor='$at_door_price' data-grouprate='$group_rate' data-onlineprice='$online_price' data-vipdark='$vip_after_dark' data-vipquick='$vip_quick_pass' data-viphex='$vip_hex_pass' data-vipdarkhex='$vip_after_dark_hex' data-day='$day' data-month='$month'";
			
			
			$monNum = "";
			
			if($month == "september") {
				$monNum = "09";
			}
			
			if($month == "october") {
				$monNum = "10";
			}
			
			if($month == "november") {
				$monNum = "11";
			}

            if ($day < 10){
                $day = '0' . $day;
            }
			
			$d = date("Y") . "-" . $monNum . "-" . $day;
			
			$dataAttr .= " data-link='" . $this->settings['ticketing_link'] . $d . "'";
			
			return $dataAttr;
		}
		
	}
	
	function getOptions($day, $month) {
		
		
		for($i = 0; $i < count($this->settings['options'][$month]); $i++) {
            
            try {
	            if (isset($this->settings['options'][$month][$i])){
	    			$temp = $this->settings['options'][$month][$i];
	    			
	    			if($month == 'october') {
	    				if($day == 7) {
	    					//var_dump($temp[$day]]);
	    				}
	    			}
	    			if(isset($temp[$day])) {
	    				return str_replace('"', "'", json_encode($temp[$day]));	
	    			}
	            }
            } catch (Exception $e) {
			}
		}
		
		return '';
	}

	function printCalendarTable() {
		
		$tableStr = '';
		$show = true;
		$optionString = '';
		$tableStr .= '<div class="calendar-table">';
			foreach($this->settings['months'] as $key => $month) {
				$month_number = date('n', strtotime($key));
				$jd = gregoriantojd($month_number, $month['range'][0], $this->settings['year']);
				$day_of_the_week = jddayofweek($jd, 0);

				$month_name_pos = 'top';
				if($day_of_the_week > 1) {
					$month_name_pos = 'bottom';
				}
				
				$tableStr .= '<div class="month">';
					$tableStr .= '<div class="month-name ' . $month_name_pos . '">' . $key . '</div>';

					$tableStr .= '<table>';					
						$tableStr .= '<tr>';
						// Add <td> for padding, if necessary
						if($day_of_the_week != 0) {
							for($i = 0; $i < $day_of_the_week; $i++) {
								$tableStr .= '<td class="padding-td"></td>';
							}
						}

						// Print the "real" table
						for($j = $day_of_the_week, $i = $month['range'][0]; $i <= $month['range'][1]; $i++, $j++) {

							if($j % 7 == 0) {
								$tableStr .= '</tr>';
								$tableStr .= '<tr>';
							}

							$td_color = 'not-colored';
							$td_options = '';
							
							
							foreach($month['colors'] as $color => $content) {
								if(in_array($i, $content)) {
									$td_color = $color;
									
									if($show) {
										
									$show = false;	
									}
									$optionString = $this->getOptions($i, $key);
									
								}
							}
							
							$class_name = "";
							if($td_color != 'not-colored') {
								$class_name = strtolower($key) . "-" . $i;
							}
                            
							$tableStr .= '<td data-jsondata="' . $optionString . '" class="' . $td_color . " " . $class_name . '"' . $this->getDataAttributes($i, $key, $td_color) . ' data-schedulekey="' . $class_name . ' ">';
								$tableStr .= '<span class="day-number">' . $i . '</span>';
                                if (strpos($optionString, 'remix') !== false) {
								    $tableStr .= '<img src="./themes/tbtw/assets/REMIX.png" alt="REMIX" />';
							    }
								if($td_color != 'not-colored') {
									$tableStr .= '<div class="price hidden-lg hidden-md">
										<span class="dollars">$</span>
										<span class="number">' . $this->settings['colors'][$td_color]['price'] .'</span>
									</div>';
								}								
							$tableStr .= '</td>';							
						}
						$tableStr .= '</tr>';
					$tableStr .= '</table>';

				$tableStr .= '</div>';
			}
		$tableStr .= '</div>';
		
		return $tableStr;
	}
}
?>