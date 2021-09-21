package com.camunda.demo.FirstDemo;

import java.util.Random;

import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;

public class CheckWeatherDelegate implements JavaDelegate {

	@Override
	public void execute(DelegateExecution execution) throws Exception {
		// TODO Auto-generated method stub
		Random rand = new Random();
		execution.setVariable("Name", "Zia");
		execution.setVariable("weatherOK", rand.nextBoolean());
		
	}

}
